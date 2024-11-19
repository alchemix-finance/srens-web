import { formatEther } from "viem"

export function formatLocaleUnits(value: bigint) {
  return Intl.NumberFormat("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 3, notation: "compact" })
    .format(Number(formatEther(value)))
    .toLocaleUpperCase()
}
