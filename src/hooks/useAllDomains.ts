import { useQuery } from "@tanstack/react-query"
import { useAccount } from "wagmi"

import { useSubscriptions } from "@/hooks/useSelfRepayingEns"
import { queries } from "@/lib"

import { useSrensStore } from "@/store"
import { useEffect } from "react"

export function useAllDomains() {
  const { address } = useAccount()
  const setToast = useSrensStore((store) => store.setToast)

  // get subscribed domains from contract
  const { subscriptions } = useSubscriptions()

  // get owned domains from subgraph
  const ownedDomainNames = useQuery({
    ...queries.domains.user(address ?? "0x"),
    enabled: !!address,
  })
  useEffect(
    () => {
      if (ownedDomainNames.status === "error") {
        setToast("error", "Error fetching owned domains")
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ownedDomainNames.status],
  )

  // merge subscribed + owned into unique array of names
  const allDomainNames = Array.from(
    new Set([
      ...(subscriptions.data?.subscribedNames ?? []),
      ...(ownedDomainNames.data?.account?.registrations?.map((r) => r.domain.name) ?? []),
    ]),
  ).filter((name) => !!name) as Array<string>

  // request full domain data from subgraph once unique list is ready
  const allDomains = useQuery({
    ...queries.domains.list(allDomainNames),
    enabled: subscriptions.isFetchedAfterMount && ownedDomainNames.isFetchedAfterMount && allDomainNames.length > 0,
  })
  useEffect(
    () => {
      if (allDomains.status === "error") {
        setToast("error", "Error fetching domain data")
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allDomains.status],
  )

  // return domains sorted by ascending expiryDate
  return {
    data: allDomains.data?.domains.sort(
      (a, b) => Number(a.registration?.expiryDate ?? "0") - Number(b.registration?.expiryDate ?? "0"),
    ),
    isLoading: subscriptions.isLoading || ownedDomainNames.isInitialLoading || allDomains.isInitialLoading,
  }
}
