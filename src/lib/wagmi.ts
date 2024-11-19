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
      http(`https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`),
      http("https://eth.llamarpc.com"),
    ]),
  },
})
