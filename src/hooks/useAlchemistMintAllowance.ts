import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi"

import { useSrensStore } from "@/store"

import { alchemistConfig, selfRepayingEnsAddress } from "@/constant"
import { useCallback, useEffect } from "react"
import { maxUint256, UserRejectedRequestError } from "viem"

export const useAlchemistMintAllowance = () => {
  const account = useAccount()
  const setToast = useSrensStore((store) => store.setToast)

  const allowance = useReadContract({
    ...alchemistConfig,
    functionName: "mintAllowance",
    args: [account.address ?? "0x", selfRepayingEnsAddress],
    query: {
      enabled: !!account.address,
      select: (data) => data > 0,
    },
  })

  const { writeContract, ...mutation } = useWriteContract({
    mutation: {
      onError: (err) =>
        err instanceof UserRejectedRequestError || err.message.includes("User rejected the request")
          ? setToast("error", "Request rejected")
          : setToast("error", "Transaction failed"),
      onMutate: () => setToast("pending", "Waiting for signature"),
      onSuccess: () => setToast("pending", "Waiting for confirmation"),
    },
  })
  const updateAllowance = useCallback(
    () =>
      writeContract({
        ...alchemistConfig,
        functionName: "approveMint",
        args: [selfRepayingEnsAddress, maxUint256],
      }),
    [writeContract],
  )

  const receipt = useWaitForTransactionReceipt({ hash: mutation.data })
  useEffect(
    () => {
      if (receipt.status === "error") {
        setToast("error", "Error updating mint allowance")
        return
      }
      if (receipt.status === "success") {
        allowance.refetch()
        setToast("success", "Mint allowance updated")
        return
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [receipt.status],
  )

  return {
    allowance,
    updateAllowance: {
      write: updateAllowance,
      isError: mutation.isError || receipt.isError,
      isWaiting: mutation.isPending || receipt.isLoading,
    },
  }
}
