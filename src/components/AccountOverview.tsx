import { FC } from "react"
import { FaRegQuestionCircle } from "react-icons/fa"
import { useAccount } from "wagmi"

import { useAlchemistAccountMetrics, useIsClientReady, useSubscriptions } from "@/hooks"
import { clsxm } from "@/lib"
import { formatLocaleUnits } from "@/lib/formatLocaleUnits"

import { Button } from "@/components/Button"
import { PrettyLink } from "@/components/PrettyLink"
import { SectionTitle } from "@/components/SectionTitle"

import { useSrensStore } from "@/store"

type AccountOverviewProps = {
  showAlchemixLink?: boolean
  showCollateralizationHelp?: boolean
}

export const AccountOverview: FC<AccountOverviewProps> = ({ showAlchemixLink, showCollateralizationHelp }) => {
  const isClientReady = useIsClientReady()
  const { isConnected } = useAccount()
  const accountMetrics = useAlchemistAccountMetrics()
  const { subscriptions } = useSubscriptions()

  const setModal = useSrensStore((store) => store.setModal)

  return (
    <section>
      <div className="flex items-baseline justify-between">
        <SectionTitle className="max-md:text-white">Account</SectionTitle>
        {showAlchemixLink && (
          <PrettyLink className="text-xs text-bronze" href="https://alchemix.fi/vaults" external>
            Alchemix
          </PrettyLink>
        )}
      </div>

      <div className="rounded md:border md:border-comet-600 md:bg-comet-700 md:px-2 md:py-1">
        <dl className="grid grid-cols-[1fr,max-content] text-sm leading-loose">
          <dt className="text-comet-50">Total deposit</dt>
          <dd className="text-right font-mono">
            {isClientReady && accountMetrics.data?.totalDeposited
              ? `${formatLocaleUnits(accountMetrics.data.totalDeposited)} ETH`
              : "–"}
          </dd>
          <dt className="text-comet-50">Current debt</dt>
          <dd className="text-right font-mono">
            {isClientReady && accountMetrics.data?.totalDebt
              ? accountMetrics.data.totalDebt >= 0
                ? `${formatLocaleUnits(accountMetrics.data.totalDebt)} ETH`
                : `${formatLocaleUnits(BigInt(0))} ETH`
              : "–"}
          </dd>
          <dt className="text-comet-50">Collateralization</dt>
          <dd
            className={clsxm("inline-flex items-center justify-end gap-2 text-right font-mono", {
              "text-green": isClientReady && accountMetrics.data?.isCollateralized,
              "text-red": isClientReady && isConnected && !accountMetrics.data?.isCollateralized,
            })}
          >
            {isClientReady && accountMetrics.data?.currCollatRatio
              ? accountMetrics.data.totalDebt >= 0 && accountMetrics.data.totalDeposited > 0
                ? formatLocaleUnits(accountMetrics.data.currCollatRatio)
                : accountMetrics.data.totalDeposited > 0
                  ? "∞"
                  : "0.0"
              : "–"}
            {isClientReady && isConnected && !accountMetrics.data?.isCollateralized && showCollateralizationHelp && (
              <Button onClick={() => setModal("underCollateralized")}>
                <FaRegQuestionCircle className="h-4 w-4" />
              </Button>
            )}
          </dd>
          <dt className="text-comet-50">Subscriptions</dt>
          <dd className="text-right">
            {isClientReady && subscriptions.data?.subscribedNames ? subscriptions.data.subscribedNames.length : "–"}
          </dd>
          <dt className="text-comet-50">Renewal task</dt>
          <dd className="text-right">
            {isClientReady &&
            subscriptions.data?.taskId &&
            subscriptions.data.taskId !== "0x0000000000000000000000000000000000000000000000000000000000000000" ? (
              <PrettyLink
                className="text-xs text-bronze"
                href={`https://app.gelato.network/task/${subscriptions.data.taskId}?chainId=1`}
                external
              >
                Gelato
              </PrettyLink>
            ) : (
              "–"
            )}
          </dd>
        </dl>
      </div>
    </section>
  )
}
