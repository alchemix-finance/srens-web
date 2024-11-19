import { useAccount, useReadContracts } from "wagmi"

import { alchemistConfig } from "@/constant"
import { parseUnits } from "viem"

export function useAlchemistAccountMetrics() {
  const account = useAccount()
  return useReadContracts({
    contracts: [
      { ...alchemistConfig, functionName: "minimumCollateralization" },
      { ...alchemistConfig, functionName: "accounts", args: [account.address!] },
      { ...alchemistConfig, functionName: "totalValue", args: [account.address!] },
    ],
    query: {
      enabled: !!account.address,
      select: ([minCollatRatio, [totalDebt], totalDeposited]) => {
        const currCollatRatio = parseUnits(totalDebt > 0 ? (totalDeposited / totalDebt).toString() : "0", 18)
        return {
          currCollatRatio,
          isCollateralized: currCollatRatio >= minCollatRatio || (totalDeposited > 0 && totalDebt <= 0),
          minCollatRatio,
          totalDeposited,
          totalDebt,
        }
      },
    },
    allowFailure: false,
  })
}
