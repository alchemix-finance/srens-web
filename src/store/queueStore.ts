import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Maybe } from ".graphclient"

export type QueuedCall = {
  name: Maybe<string> | undefined
  type: "subscribe" | "unsubscribe"
}

type QueueStore = {
  calls: Array<QueuedCall>
  addCall: (call: QueuedCall) => void
  removeCall: (name: QueuedCall["name"]) => void
  removeAllCalls: () => void
}

export const useQueueStore = create<QueueStore>()(
  persist(
    (set) => ({
      calls: [],
      addCall: (call) => set((state) => ({ calls: [...state.calls, call] })),
      removeCall: (name) => set((state) => ({ calls: state.calls.filter((c) => c.name !== name) })),
      removeAllCalls: () => set({ calls: [] }),
    }),
    { name: "srens.queue" }
  )
)