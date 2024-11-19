import Link from "next/link"
import { FC } from "react"

import { AccountOverview } from "@/components/AccountOverview"
import { Button } from "@/components/Button"
import { Modal } from "@/components/Modal/Modal"
import { SectionTitle } from "@/components/SectionTitle"

import { useSrensStore } from "@/store"

export const UnderCollateralizedModal: FC = () => {
  const setModal = useSrensStore((store) => store.setModal)
  return (
    <Modal name="underCollateralized">
      <header>
        <SectionTitle className="text-white md:text-base">You&apos;re under collateralized</SectionTitle>
        <p className="text-sm text-comet-50 sm:text-base">
          Ensure you have some ETH deposited into Alchemix. Alchemix LTV is 50%, so make sure the borrowable amount is
          sufficient for at least a 1-year renewal.
        </p>
      </header>
      <AccountOverview />
      <div className="space-y-3">
        <Link
          className="block w-full rounded bg-green px-6 py-3.5 text-center font-semibold text-comet-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-600"
          href="https://alchemix.fi/vaults"
        >
          Go to Alchemix
        </Link>
        <Button
          className="w-full px-6 py-3.5 font-semibold text-comet-100 focus-visible:ring-offset-comet-600"
          onClick={() => setModal(undefined)}
        >
          Go back
        </Button>
      </div>
    </Modal>
  )
}
UnderCollateralizedModal.displayName = "UnderCollateralizedModal"
