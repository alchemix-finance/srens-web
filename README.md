# srens-web

## Getting started

1. Install dependencies: `pnpm i`
2. Configure environment varibles: `cp .env.example .env`
3. Start dev server: `pnpm dev`

### Environment variables

- `NEXT_PUBLIC_INFURA_KEY` - required for mainnet RPC
- `NEXT_PUBLIC_ENABLE_FOUNDRY` - set to `true` to enable localhost network

## GraphQL codegen

[@graphprotocol/client-cli](https://thegraph.com/docs/en/querying/querying-from-an-application/) is used to generate an SDK for querying the ENS subgraph.

- queries are defined in `src/graphql`
- configuration is defined in `.graphclientrc.yml`
- run generation with: `pnpm codegen:graphql`

Note: there are warnings in the console when using this but the expert advice is to ignore. Will revisit if it ends up being problematic.

## Libraries

- [nextjs](https://nextjs.org/)
- [wagmi](https://wagmi.sh/) for reading and interacting with contracts
- [rainbowkit](https://www.rainbowkit.com/) for managing wallet connection
- [react-query](https://tanstack.com/query/v4/docs/react/overview) for data sync (wagmi uses this under the hood)
- [react-icons](https://react-icons.github.io/react-icons) for icons
- [dayjs](https://day.js.org/) for dates
- [tailwindcss](https://tailwindcss.com/) for styling
