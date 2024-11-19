import { FC } from "react"
import { FiMinus, FiPlus, FiX } from "react-icons/fi"

import { useAlchemistMintAllowance, useIsClientReady, useSubscriptions } from "@/hooks"
import { clsxm } from "@/lib"

import { SectionTitle } from "@/components/SectionTitle"
import { Spinner } from "@/components/Spinner"

import { useSrensStore } from "@/store"

export const QueuedChanges: FC = () => {
  const isClientReady = useIsClientReady()
  const queuedCalls = useSrensStore((store) => store.queuedCalls)
  const dequeueCall = useSrensStore((store) => store.dequeueCall)
  const isRemoveDisabled = useSrensStore((state) => state.toast?.status === "pending")

  return (
    <>
      {isClientReady && queuedCalls.length > 0 ? (
        <ul>
          {queuedCalls.map(({ name, type }) => (
            <li
              key={`queue-${name}`}
              className="grid grid-cols-[auto,1fr,auto] items-center gap-3 py-2.5 md:gap-2 md:py-2"
            >
              {type === "subscribe" ? (
                <FiPlus className="h-5 w-5 stroke-green-100" />
              ) : (
                <FiMinus className="h-5 w-5 stroke-orange" />
              )}
              <div className="grow-0 overflow-hidden text-ellipsis md:text-sm">{name}</div>
              <button
                className="rounded text-comet-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800 disabled:cursor-not-allowed disabled:opacity-50 max-md:text-comet-300"
                disabled={isRemoveDisabled}
                onClick={() => dequeueCall(name)}
              >
                <FiX className="h-6 w-6 stroke-current md:h-5 md:w-5" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-sm text-comet-100 md:text-xs lg:text-sm">
          Subscription changes you make will appear here for review. You can submit multiple changes in a single
          transaction.
        </div>
      )}
    </>
  )
}

export const CommitQueuedChanges: FC = () => {
  const isClientReady = useIsClientReady()

  const queuedCalls = useSrensStore((store) => store.queuedCalls)
  const setModal = useSrensStore((store) => store.setModal)
  const setSearchQuery = useSrensStore((store) => store.setSearchQuery)
  const setSubmittedSearch = useSrensStore((store) => store.setSubmittedSearch)

  const { allowance, updateAllowance } = useAlchemistMintAllowance()
  const { updateSubscriptions } = useSubscriptions(() => {
    setModal(undefined)
    setSearchQuery("")
    setSubmittedSearch("")
  })

  if (!isClientReady || !queuedCalls.length) return null

  return (
    <div>
      {allowance.data ? (
        <>
          <SectionTitle className="max-md:text-white">Update subscriptions</SectionTitle>
          <button
            className={clsxm(
              "relative flex w-full items-center justify-center gap-3 rounded bg-green p-3 font-semibold text-comet-900 transition-colors md:text-sm",
              {
                "cursor-wait opacity-50": updateSubscriptions.isWaiting,
                "enabled:shadow-glow enabled:ring-1 enabled:ring-white/30 enabled:hover:bg-green-100 enabled:focus:outline-none enabled:focus-visible:ring-1 enabled:focus-visible:ring-bronze enabled:focus-visible:ring-offset-4 enabled:focus-visible:ring-offset-comet-800":
                  !updateSubscriptions.isWaiting,
              },
            )}
            disabled={updateSubscriptions.isWaiting}
            onClick={updateSubscriptions.write}
          >
            {updateSubscriptions.isWaiting ? "Updating subscriptions" : "Update subscriptions"}
            {updateSubscriptions.isWaiting && <Spinner className="h-5 w-5 fill-current md:h-4 md:w-4" />}
            {!updateSubscriptions.isWaiting && (
              <div aria-hidden="true" className="absolute inset-0 animate-ping rounded ring-1 ring-green" />
            )}
          </button>
        </>
      ) : (
        <>
          <SectionTitle className="max-md:text-white">Mint allowance</SectionTitle>
          <p className="mb-4 text-sm text-comet-100 md:text-xs">
            For Self-Repaying ENS to work you must approve SRENS to mint alETH on your behalf.
          </p>
          <button
            className={clsxm(
              "relative flex w-full items-center justify-center gap-3 rounded bg-green p-3 font-semibold text-comet-900 transition-colors md:text-sm",
              {
                "cursor-wait opacity-50": updateAllowance.isWaiting,
                "enabled:shadow-glow enabled:ring-1 enabled:ring-white/30 enabled:hover:bg-green-100 enabled:focus:outline-none enabled:focus-visible:ring-1 enabled:focus-visible:ring-bronze enabled:focus-visible:ring-offset-4 enabled:focus-visible:ring-offset-comet-800":
                  !updateAllowance.isWaiting,
              },
            )}
            disabled={updateAllowance.isWaiting}
            onClick={updateAllowance.write}
          >
            {updateAllowance.isWaiting ? "Approving" : "Approve"}
            {updateAllowance.isWaiting && <Spinner className="h-5 w-5 fill-current md:h-4 md:w-4" />}
            {!updateAllowance.isWaiting && (
              <div aria-hidden="true" className="absolute inset-0 animate-ping rounded ring-1 ring-green" />
            )}
          </button>
        </>
      )}
    </div>
  )
}
