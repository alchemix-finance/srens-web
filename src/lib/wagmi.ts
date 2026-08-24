import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { fallback, http } from "wagmi"
import { foundry, mainnet } from "wagmi/chains"

const isFoundryEnabled = process.env.NEXT_PUBLIC_ENABLE_FOUNDRY === "true"

export const config = getDefaultConfig({
  appName: "Self Repaying ENS",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "",
  chains: [mainnet, ...(isFoundryEnabled ? [foundry] : [])],
  transports: {
    [mainnet.id]: fallback([
      http("https://base-rpc.publicnode.com"),
      http("https://base.drpc.org"),
      http("https://mainnet.base.org"),
    ]),
  },
})
