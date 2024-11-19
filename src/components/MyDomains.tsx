import { FC } from "react"
import { useAccount } from "wagmi"

import { useIsClientReady } from "@/hooks"
import { useAllDomains } from "@/hooks/useAllDomains"

import { Domain } from "@/components/Domain"
import { FallbackMessage } from "@/components/FallbackMessage"
import { Spinner } from "@/components/Spinner"

export const MyDomains: FC = () => {
  const isClientReady = useIsClientReady()
  const { isConnected } = useAccount()
  const allDomains = useAllDomains()

  if (!isClientReady) return null

  return (
    <>
      {!isConnected ? (
        <FallbackMessage variant="black">Connect your wallet to view your domains</FallbackMessage>
      ) : allDomains.isLoading ? (
        <FallbackMessage variant="transparent">
          <Spinner className="h-8 w-8" />
        </FallbackMessage>
      ) : !allDomains.data?.length ? (
        <FallbackMessage variant="black">You don&apos;t own any domains</FallbackMessage>
      ) : (
        allDomains.data.map((domain) => (
          <Domain
            key={domain.name}
            name={domain.name}
            expiryDate={domain.registration?.expiryDate}
            registrationDate={domain.registration?.registrationDate}
            renewalEvents={domain.registration?.events}
          />
        ))
      )}
    </>
  )
}
MyDomains.displayName = "MyDomains"
