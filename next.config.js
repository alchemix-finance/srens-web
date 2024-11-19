/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    })
    // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908
    config.externals.push("pino-pretty", "lokijs", "encoding")
    return config
  },
}

module.exports = nextConfig
