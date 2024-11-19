import { createQueryKeyStore } from "@lukemorales/query-key-factory"
import { QueryClient } from "@tanstack/react-query"
import type { Address } from "viem"

import { getBuiltGraphSDK } from "../../.graphclient"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const sdk = getBuiltGraphSDK()

export const queries = createQueryKeyStore({
  domains: {
    user: (address: Address) => ({
      queryKey: [address],
      queryFn: () => sdk.getDomainsForAddress({ address: address.toLowerCase() }),
    }),
    list: (names: Array<string>) => ({
      queryKey: [names],
      queryFn: () => sdk.getDomains({ names }),
    }),
  },
})
