import { selfRepayingEnsConfig } from "@/constant"
import { useSrensStore } from "@/store"
import { useCallback, useEffect } from "react"
import { encodeFunctionData, UserRejectedRequestError } from "viem"
import { useAccount, useReadContracts, useWaitForTransactionReceipt, useWriteContract } from "wagmi"

export const useSubscriptions = (onSubscriptionsUpdated?: () => void) => {
  const account = useAccount()
  const setToast = useSrensStore((store) => store.setToast)

  const subscriptions = useReadContracts({
    contracts: [
      { ...selfRepayingEnsConfig, functionName: "subscribedNames", args: [account.address ?? "0x"] },
      { ...selfRepayingEnsConfig, functionName: "getTaskId", args: [account.address ?? "0x"] },
    ],
    query: {
      enabled: !!account.address,
      select: ([subscribedNames, taskId]) => ({
        subscribedNames: subscribedNames.map((name) => `${name}.eth`),
        taskId,
      }),
    },
    allowFailure: false,
  })
  useEffect(
    () => {
      if (subscriptions.status === "error") {
        setToast("error", "Error fetching subscriptions")
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [subscriptions.status],
  )

  const { writeContract, ...mutation } = useWriteContract({
    mutation: {
      onError: (error) =>
        setToast(
          "error",
          error instanceof UserRejectedRequestError || error.message.includes("User rejected the request")
            ? "Request rejected"
            : "Transaction failed",
        ),
      onSuccess: () => setToast("pending", "Waiting for confirmation"),
    },
  })

  const queuedCalls = useSrensStore((store) => store.queuedCalls)
  const dequeueAllCalls = useSrensStore((store) => store.dequeueAllCalls)
  const updateSubscriptions = useCallback(
    () => {
      if (!queuedCalls.length) {
        setToast("error", "No changes to update")
        return
      }
      setToast("pending", "Waiting for signature")
      const calldata = queuedCalls
        .filter((change) => !!change.name)
        .map((change) =>
          encodeFunctionData({
            abi: selfRepayingEnsConfig.abi,
            functionName: change.type,
            args: [change.name!.substring(0, change.name!.indexOf(".eth")).toLowerCase()],
          }),
        )
      writeContract({ ...selfRepayingEnsConfig, functionName: "multicall", args: [calldata] })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [writeContract, queuedCalls],
  )

  const receipt = useWaitForTransactionReceipt({ hash: mutation.data })
  useEffect(
    () => {
      if (receipt.status === "error") {
        setToast("error", "Transaction failed")
        return
      }
      if (receipt.status === "success") {
        setToast("success", "Subscriptions updated")
        dequeueAllCalls()
        onSubscriptionsUpdated?.()
        subscriptions.refetch()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [receipt.status],
  )

  return {
    subscriptions,
    updateSubscriptions: {
      write: updateSubscriptions,
      isWaiting: mutation.isPending || receipt.isLoading,
      isError: mutation.isError,
    },
  }
}
