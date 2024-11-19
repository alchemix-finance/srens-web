import { Transition } from "@headlessui/react"
import { FC, Fragment, useEffect, useRef } from "react"
import { useAccount } from "wagmi"

import { clsxm } from "@/lib"

import { Spinner } from "@/components/Spinner"

import { useSrensStore } from "@/store"

export const Toaster: FC = () => {
  const { address } = useAccount()
  const timerRef = useRef<NodeJS.Timeout>()
  const toast = useSrensStore((store) => store.toast)
  const unsetToast = useSrensStore((store) => store.unsetToast)

  useEffect(() => {
    if (toast?.status === "error" || toast?.status === "success") {
      timerRef.current = setTimeout(unsetToast, 6000)
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast])

  useEffect(() => {
    if (toast?.status === "pending") {
      unsetToast()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  return (
    <Transition
      as={Fragment}
      show={!!toast?.message && !!toast?.status}
      enter="transition-opacity ease-linear"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={clsxm(
          "flex items-center gap-3 p-3 text-sm font-medium text-white max-md:justify-center md:rounded md:py-1.5",
          {
            "bg-blue": toast?.status === "pending",
            "bg-green-300": toast?.status === "success",
            "bg-red": toast?.status === "error",
          },
        )}
      >
        {toast?.message}
        {toast?.status === "pending" && <Spinner className="h-4 w-4 fill-current" />}
      </div>
    </Transition>
  )
}
