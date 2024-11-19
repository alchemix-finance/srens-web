import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Maybe } from ".graphclient"

type QueuedCall = {
  name: Maybe<string> | undefined
  type: "subscribe" | "unsubscribe"
}

type Toast = {
  status: "error" | "pending" | "success"
  message: string
}

export type Modal = "queuedChanges" | "underCollateralized" | undefined

type SrensStore = {
  queuedCalls: Array<QueuedCall>
  enqueueCall: (call: QueuedCall) => void
  dequeueCall: (name: QueuedCall["name"]) => void
  dequeueAllCalls: () => void
  modal: Modal
  setModal: (modal: Modal) => void
  showExplainer: boolean
  setShowExplainer: (showExplainer: boolean) => void
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
  submittedSearch: string
  setSubmittedSearch: (submittedSearch: string) => void
  toast?: Toast
  setToast: (status: Toast["status"], message: Toast["message"]) => void
  unsetToast: () => void
}

export const useSrensStore = create<SrensStore>()(
  persist(
    (set) => ({
      queuedCalls: [],
      enqueueCall: (call) => set((state) => ({ queuedCalls: [...state.queuedCalls, call] })),
      dequeueCall: (name) => set((state) => ({ queuedCalls: state.queuedCalls.filter((c) => c.name !== name) })),
      dequeueAllCalls: () => set({ queuedCalls: [] }),
      modal: undefined,
      setModal: (modal) => set({ modal }),
      showExplainer: true,
      setShowExplainer: (showExplainer) => set({ showExplainer }),
      setToast: (status, message) => set({ toast: { status, message } }),
      unsetToast: () => set({ toast: undefined }),
      searchQuery: "",
      setSearchQuery: (searchQuery) => set({ searchQuery }),
      submittedSearch: "",
      setSubmittedSearch: (submittedSearch) => set({ submittedSearch }),
      toast: undefined,
    }),
    {
      name: "srens-store",
      partialize: (state) => ({
        // persist only the following properties
        showExplainer: state.showExplainer,
      }),
    },
  ),
)
