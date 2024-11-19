import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { QueryClientProvider } from "@tanstack/react-query"
import { AppProps } from "next/app"

import { config, montserrat, queryClient } from "@/lib"
import "@/styles/globals.css"
import { WagmiProvider } from "wagmi"

const alchemixTheme = {
  ...darkTheme(),
  colors: {
    ...darkTheme().colors,
    accentColor: "#2ecc94", // green
    closeButton: "#616A85", // comet-400
    closeButtonBackground: "#20242C", // comet-700
    modalBackground: "#383D4D", // comet-600
    modalBorder: "#4F576D", // comet-500
  },
  radii: {
    ...darkTheme().radii,
    actionButton: "0.25rem",
    menuButton: "0.25rem",
    modal: "0.5rem",
    modalMobile: "0.5rem",
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} font-sans`}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact" theme={alchemixTheme}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  )
}

export default MyApp
