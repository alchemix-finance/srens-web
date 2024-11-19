import { Switch } from "@headlessui/react"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
import { FC } from "react"
import { useAccount } from "wagmi"

import { useAlchemistAccountMetrics, useSubscriptions } from "@/hooks"
import { useBlockTimestamp } from "@/hooks/useBlockTimestamp"
import { clsxm } from "@/lib"

import { useSrensStore } from "@/store"

import { Maybe, NameRenewed } from ".graphclient"

dayjs.extend(localizedFormat)

type RenewalEvent = Pick<NameRenewed, "blockNumber">

type DomainProps = {
  name: Maybe<string> | undefined
  expiryDate: number
  registrationDate: number
  renewalEvents?: Array<object | RenewalEvent>
}

export const Domain: FC<DomainProps> = ({
  name,
  expiryDate: _expiryDate,
  registrationDate: _registrationDate,
  renewalEvents,
}) => {
  const { isConnected, isConnecting, isReconnecting } = useAccount()
  const { openConnectModal } = useConnectModal()

  const nearestRenewalEvent = renewalEvents?.find((e) => Object.hasOwn(e, "blockNumber")) as RenewalEvent | undefined

  const renewalBlockDate = useBlockTimestamp(nearestRenewalEvent?.blockNumber)
  const { subscriptions } = useSubscriptions()
  const queuedCall = useSrensStore((state) => state.queuedCalls.find((c) => c.name === name))
  const enqueueCall = useSrensStore((state) => state.enqueueCall)
  const dequeueCall = useSrensStore((state) => state.dequeueCall)
  const setModal = useSrensStore((state) => state.setModal)

  const accountMetrics = useAlchemistAccountMetrics()

  const expiryDate = dayjs.unix(_expiryDate)
  const registrationDate = dayjs.unix(_registrationDate)
  const renewalDate = renewalBlockDate.data ? dayjs.unix(renewalBlockDate.data) : undefined

  const isExpired = expiryDate.add(90, "days").isBefore(dayjs())
  const isSubscribed = subscriptions.data?.subscribedNames.includes(name ?? "")
  const isSwitchChecked = (queuedCall?.type && queuedCall.type === "subscribe") ?? isSubscribed ?? false
  const isSwitchLoading =
    useSrensStore((state) => state.toast?.status === "pending") ||
    isConnecting ||
    isReconnecting ||
    accountMetrics.isLoading

  const onChangeSwitch = (checked: boolean) => {
    if (!isConnected) {
      openConnectModal?.()
    } else if (!isSubscribed && !accountMetrics.data?.isCollateralized) {
      setModal("underCollateralized")
    } else if (queuedCall) {
      dequeueCall(name)
      return
    } else {
      enqueueCall({ name, type: checked ? "subscribe" : "unsubscribe" })
    }
  }

  return (
    <>
      <div className="grid items-center rounded border border-comet-600 bg-comet-700">
        <div className="col-span-full flex items-center justify-between border-b border-b-comet-500/30 p-4">
          <h1 className="text-lg">{name}</h1>

          {isExpired ? (
            <span className="text-xs uppercase text-orange">Expired</span>
          ) : (
            <Switch.Group>
              <div className="flex items-center">
                <Switch.Label className={clsxm("pr-3 text-bronze", { "cursor-wait": isSwitchLoading })}>
                  Auto-renew
                </Switch.Label>
                <Switch
                  checked={isSwitchChecked}
                  onChange={onChangeSwitch}
                  disabled={isSwitchLoading}
                  className="relative inline-flex h-7 w-12 items-center rounded-full bg-comet-800 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800 disabled:cursor-wait disabled:opacity-50 disabled:grayscale ui-checked:bg-green-100"
                >
                  <span className="inline-block h-5 w-5 translate-x-1 transform rounded-full transition-all ui-checked:translate-x-6 ui-checked:bg-comet-700 ui-not-checked:translate-x-1 ui-not-checked:bg-comet-100" />
                </Switch>
              </div>
            </Switch.Group>
          )}
        </div>

        <dl className="flex flex-wrap justify-between p-4 text-xs leading-loose md:grid-cols-3 lg:inline-grid lg:max-w-xl lg:gap-x-12 lg:leading-relaxed">
          <dt className="uppercase text-comet-300 max-lg:w-1/3 lg:row-start-2">Expires</dt>
          <dd className="font-mono max-lg:w-2/3 max-lg:text-right lg:row-start-1">
            <FormattedDate date={expiryDate} />
          </dd>
          <dt className="uppercase text-comet-300 max-lg:w-1/3 lg:row-start-2">Registered</dt>
          <dd className="font-mono max-lg:w-2/3 max-lg:text-right lg:row-start-1">
            <FormattedDate date={registrationDate} />
          </dd>
          <dt className="uppercase text-comet-300 max-lg:w-1/3 lg:row-start-2">Renewed</dt>
          <dd className="font-mono max-lg:w-2/3 max-lg:text-right lg:row-start-1">
            {renewalBlockDate.isLoading ? (
              "Loading..."
            ) : renewalBlockDate.isError ? (
              "Error fetching renewal date"
            ) : renewalDate ? (
              <FormattedDate date={renewalDate} />
            ) : (
              "Never"
            )}
          </dd>
        </dl>
      </div>
    </>
  )
}

type FormattedDateProps = {
  date: dayjs.Dayjs
}

const FormattedDate: FC<FormattedDateProps> = ({ date }) => {
  return (
    <>
      {date.format("L")}, {date.format("LT")}
    </>
  )
}
