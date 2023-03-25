import { Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { useAccount } from "wagmi"

import { clsxm } from "@/lib"
import { useIsClientReady } from "@/hooks"

import {
  AccountOverview,
  CommitQueuedChanges,
  Explainer,
  Footer,
  Header,
  Layout,
  MyDomains,
  PrettyLink,
  QueuedChanges,
  SearchDomains,
  SectionTitle,
  Seo,
} from "@/components"

import { useSrensStore } from "@/store"

export default function Dashboard() {
  const isClientReady = useIsClientReady()
  const { address } = useAccount()

  const showExplainer = useSrensStore((store) => store.showExplainer)
  const queuedCallsCount = useSrensStore((store) => store.queuedCalls.length)

  const [value, setValue] = useState<string>("")
  const [submitted, setSubmitted] = useState<string>("")

  const resetSearch = () => {
    setValue("")
    setSubmitted("")
  }

  return (
    <Layout>
      <Seo />

      <div>
        <Header showExplainerButton>
          {({ setIsMenuOpen }) => (
            <>
              {/* Mobile account overview + changes */}
              <AccountOverview />
              <CommitQueuedChanges
                onUpdated={() => {
                  setIsMenuOpen(false)
                  resetSearch()
                }}
              />
              <div>
                <SectionTitle className="text-white">
                  Changes{queuedCallsCount > 0 ? ` (${queuedCallsCount})` : null}
                </SectionTitle>
                <QueuedChanges />
              </div>
            </>
          )}
        </Header>

        <Transition
          as={Fragment}
          show={isClientReady && showExplainer}
          enter="transition-opacity ease-linear"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Explainer />
        </Transition>
      </div>

      <div className="layout h-full divide-x divide-comet-700 md:grid md:grid-cols-[2fr,1fr] lg:grid-cols-[5fr,2fr]">
        <main className="space-y-6 overscroll-auto py-4 md:pr-4">
          <section>
            <SectionTitle>Search domains</SectionTitle>
            <div className="space-y-4">
              <SearchDomains value={value} setValue={setValue} submitted={submitted} setSubmitted={setSubmitted} />
            </div>
          </section>

          <section>
            <div className="flex items-baseline justify-between">
              <SectionTitle>My SRENS</SectionTitle>
              <PrettyLink
                className="text-xs text-bronze"
                href={`https://app.ens.domains${isClientReady && address ? `/address/${address}` : ""}`}
                external
              >
                ENS Dashboard
              </PrettyLink>
            </div>

            <div className="space-y-4">
              <MyDomains />
            </div>
          </section>
        </main>

        {/* Desktop account overview + changes */}
        <aside className="grid max-h-full grid-cols-1 grid-rows-[max-content,auto] pt-4 max-md:hidden">
          <div className="space-y-6 pl-4">
            <AccountOverview />
            <CommitQueuedChanges onUpdated={resetSearch} />
            <SectionTitle
              className={clsxm("mb-0", {
                "border-b border-b-comet-700 pb-3": queuedCallsCount > 0,
              })}
            >
              Changes{isClientReady && queuedCallsCount > 0 ? ` (${queuedCallsCount})` : null}
            </SectionTitle>
          </div>
          <div className="-mr-4 overflow-y-auto px-4 py-3">
            <QueuedChanges />
          </div>
        </aside>
      </div>

      <Footer />
    </Layout>
  )
}
