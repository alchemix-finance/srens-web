import Link from "next/link"
import { FC, Fragment, PropsWithChildren } from "react"
import { FaBars, FaGithub, FaRegQuestionCircle } from "react-icons/fa"

import { useIsClientReady } from "@/hooks"

import { HeaderButton } from "@/components/Button"
import { ConnectButton } from "@/components/ConnectButton"
import { Toaster } from "@/components/Toaster"

import { useSrensStore } from "@/store"

import AlchemixLogo from "~/svg/alchemix_logo.svg"
import Dune from "~/svg/dune.svg"
import Etherscan from "~/svg/etherscan.svg"
import SRENSLogo from "~/svg/srens_logo.svg"
import { selfRepayingEnsAddress } from "@/constant"

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="bg-alchemix grid min-h-screen grid-cols-1 grid-rows-[auto,1fr,auto]">{children}</div>
)

type HeaderProps = {
  showExplainerButton?: boolean
}

export const Header: FC<HeaderProps> = ({ showExplainerButton }) => {
  const isClientReady = useIsClientReady()

  const setModal = useSrensStore((store) => store.setModal)
  const showExplainer = useSrensStore((store) => store.showExplainer)
  const setShowExplainer = useSrensStore((store) => store.setShowExplainer)
  const queuedCallsCount = useSrensStore((store) => store.queuedCalls.length)

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 md:hidden">
        <Toaster />
      </div>

      <header className="sticky top-0 z-40 border-b border-b-comet-700 bg-comet-900 py-5">
        <div className="layout flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link
              className="rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800"
              href="/"
            >
              <SRENSLogo className="h-11 w-44" />
              <span className="sr-only">Alchemix Self-Repaying ENS</span>
            </Link>
          </div>
          <div className="flex items-center gap-1.5 md:hidden">
            {isClientReady && !showExplainer && showExplainerButton && (
              <button className="p-2" onClick={() => setShowExplainer(true)}>
                <span className="sr-only">How it works</span>
                <FaRegQuestionCircle className="h-7 w-7 fill-comet-300" />
              </button>
            )}
            <ConnectButton />
            <button className="p-2" onClick={() => setModal("queuedChanges")}>
              <FaBars className="h-7 w-7 fill-comet-300" />
            </button>
          </div>
          <div className="flex shrink-0 gap-3 max-md:hidden">
            <Toaster />
            {isClientReady && !showExplainer && showExplainerButton && (
              <HeaderButton onClick={() => setShowExplainer(true)}>How it works</HeaderButton>
            )}
            <ConnectButton />
          </div>
        </div>
      </header>

      {isClientReady && queuedCallsCount > 0 && (
        <button
          className="fixed inset-x-0 bottom-0 z-30 mx-4 mb-4 rounded bg-green py-3.5 text-center font-semibold text-comet-900 shadow-md shadow-comet-900/50 md:hidden"
          onClick={() => setModal("queuedChanges")}
        >
          Review changes
        </button>
      )}
    </>
  )
}

export const Footer: FC = () => (
  <footer className="border-t border-t-comet-700 py-6 sm:py-8">
    <div className="layout flex items-center justify-between max-sm:flex-col max-sm:gap-y-6">
      <Link
        className="rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800"
        href="https://alchemix.fi/"
        target="_blank"
      >
        <AlchemixLogo className="h-9 w-36 grayscale" />
      </Link>
      <ul className="flex flex-wrap items-center gap-3 text-sm text-silver max-sm:justify-center md:gap-x-6">
        <li>
          <Link
            className="inline-flex items-center gap-2 rounded hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800"
            href={`https://etherscan.io/address/${selfRepayingEnsAddress}#code`}
            target="_blank"
          >
            <Etherscan className="h-5 w-5 fill-silver" />
            Etherscan
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex items-center gap-2 rounded hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800"
            href="https://dune.com/wary/self-repaying-ens"
            target="_blank"
          >
            <Dune className="h-5 w-5" />
            Dune Dashboard
          </Link>
        </li>
        <li>
          <Link
            className="inline-flex items-center gap-2 rounded hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800"
            href="https://github.com/alchemix-finance/srens-web"
            target="_blank"
          >
            <FaGithub className="h-5 w-5 fill-silver" />
            Client
          </Link>
        </li>
      </ul>
    </div>
  </footer>
)
