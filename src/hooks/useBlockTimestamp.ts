import { useBlock } from "wagmi"

export function useBlockTimestamp(blockNumber?: number) {
  const block = useBlock({ blockNumber: blockNumber ? BigInt(blockNumber) : undefined })
  return { ...block, data: block.data?.timestamp ? Number(block.data.timestamp) : undefined }
}
