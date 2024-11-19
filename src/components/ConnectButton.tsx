import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit"
import { FC, useEffect } from "react"
import { FaWallet } from "react-icons/fa"

import { clsxm } from "@/lib"

import { HeaderButton } from "@/components/Button"

import { useSrensStore } from "@/store"
import { useAccount, useChains } from "wagmi"

export const ConnectButton: FC = () => {
  const chains = useChains()
  const account = useAccount()

  const dequeueAllCalls = useSrensStore((store) => store.dequeueAllCalls)
  useEffect(() => {
    dequeueAllCalls()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account.chainId])

  return (
    <RainbowConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        const connected = mounted && account && chain
        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => (
              <>
                <button
                  className="p-1 md:hidden"
                  onClick={connected ? (chain.unsupported ? openChainModal : openAccountModal) : openConnectModal}
                >
                  <FaWallet
                    className={clsxm("h-7 w-7", {
                      "fill-comet-300": !connected,
                      "fill-green": connected && !chain.unsupported,
                      "fill-red": connected && chain.unsupported,
                    })}
                  />
                </button>
                <div className="flex gap-3 max-md:hidden">
                  {connected ? (
                    chain.unsupported ? (
                      <HeaderButton onClick={openChainModal}>Unsupported chain</HeaderButton>
                    ) : (
                      <>
                        {chains.length > 1 && (
                          <HeaderButton className="flex items-center gap-2" onClick={openChainModal}>
                            {chain.hasIcon && chain.iconUrl && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img alt={chain.name ?? "Chain icon"} src={chain.iconUrl} className="h-4 w-4" />
                            )}
                            <span className="max-md:hidden">{chain.name}</span>
                          </HeaderButton>
                        )}
                        <HeaderButton onClick={openAccountModal}>{account.displayName}</HeaderButton>
                      </>
                    )
                  ) : (
                    <HeaderButton onClick={openConnectModal}>Connect Wallet</HeaderButton>
                  )}
                </div>
              </>
            ))()}
          </div>
        )
      }}
    </RainbowConnectButton.Custom>
  )
}
