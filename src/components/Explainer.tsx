import { forwardRef } from "react"
import { FiX } from "react-icons/fi"

import { PrettyLink } from "@/components/PrettyLink"

import { useSrensStore } from "@/store"

import AlchemixLogoThin from "~/svg/alchemix_logo_thin.svg"

export const Explainer = forwardRef<HTMLDivElement>((_props, ref) => {
  const setShowExplainer = useSrensStore((store) => store.setShowExplainer)

  return (
    <div className="md:layout mb-3 md:my-6" ref={ref}>
      <div className="relative overflow-hidden border-b border-bronze/40 bg-gradient-to-br from-bronze-300/10 to-bronze/30 px-4 pb-6 pt-4 md:rounded-xl md:border md:p-6">
        <div className="flex items-start justify-between">
          <h1 className="relative z-10 mb-3 text-lg font-medium text-bronze-100 md:text-xl lg:text-2xl">
            Deposit some ETH with the Alchemists and never worry about losing your ENS again.
          </h1>
          <button
            className="-mr-2 -mt-2 rounded p-2 text-bronze focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => setShowExplainer(false)}
          >
            <FiX className="h-6 w-6 stroke-current md:h-5 md:w-5" />
          </button>
        </div>
        <p className="relative z-10 mb-3 text-sm leading-relaxed md:text-base md:leading-loose">
          Alchemix puts your ETH to work, providing a constant flow of funds for perpetual ENS renewals. Self-Repaying
          ENS (SRENS) works via Gelato keepers and Alchemix self-repaying alETH loans, renewing your or someone else’s
          ENS before it expires.
        </p>
        <ol className="relative z-10 mt-5 grid grid-cols-1 gap-5 text-sm md:text-base md:leading-relaxed">
          <li className="flex gap-5">
            <span className="mb-3 inline-flex h-10 w-10 shrink-0 translate-y-1 items-center justify-center rounded-full border-2 border-green p-2 text-xl font-semibold text-green">
              1
            </span>
            <div className="max-w-prose font-medium">
              <PrettyLink href="https://alchemix.fi/vaults" external>
                Ensure you have adequate ETH deposited in an Alchemix alETH position.
              </PrettyLink>{" "}
              Alchemix&apos;s LTV ratio is 50%, so make sure the borrowable amount of alETH is sufficient to pay for at
              least a 1-year renewal on all your selected domains.
            </div>
          </li>
          <li className="flex gap-5">
            <span className="mb-3 inline-flex h-10 w-10 shrink-0 translate-y-1 items-center justify-center rounded-full border-2 border-green p-2 text-xl font-semibold text-green">
              2
            </span>
            <div className="max-w-prose font-medium">
              Search for any ENS address you want to renew. These could be your own, or someone else&apos;s, and then
              click the toggle switch for each ENS to which you want to auto-renew. ENS domains associated with your
              connected wallet will automatically populate.
            </div>
          </li>
          <li className="flex gap-5">
            <span className="mb-3 inline-flex h-10 w-10 shrink-0 translate-y-1 items-center justify-center rounded-full border-2 border-green p-2 text-xl font-semibold text-green">
              3
            </span>
            <div className="max-w-prose font-medium">
              In order for the contract to do its thing, click the big green &quot;Approve&quot; button to give the
              SRENS contract the ability to mint alETH from your Alchemix position on your behalf.
            </div>
          </li>
          <li className="flex gap-5">
            <span className="mb-3 inline-flex h-10 w-10 shrink-0 translate-y-1 items-center justify-center rounded-full border-2 border-green p-2 text-xl font-semibold text-green">
              4
            </span>
            <div className="max-w-prose font-medium">
              After the approval from step 3 is confirmed, click the big green &quot;Subscribe&quot; button to enable
              SRENS to Auto-renew your ENS so that your name never expires.
            </div>
          </li>
        </ol>

        <AlchemixLogoThin className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 translate-y-1/4 opacity-10 lg:opacity-75 xl:h-[28rem] xl:w-[28rem] xl:translate-x-14 xl:translate-y-32" />
      </div>
    </div>
  )
})
Explainer.displayName = "Explainer"
