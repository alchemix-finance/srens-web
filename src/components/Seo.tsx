import Head from "next/head"
import { useRouter } from "next/router"
import { FC } from "react"

const defaultMeta = {
  title: "Self-Repaying ENS",
  siteName: "Self-Repaying ENS",
  description: "Deposit some ETH with the Alchemists and never worry about losing your ENS again.",
  url: "https://ens.alchemix.fi/",
  type: "website",
  robots: "follow, index",
  image: "https://ens.alchemix.fi/images/srens_og.png",
}

type SeoProps = {
  date?: string
  templateTitle?: string
} & Partial<typeof defaultMeta>

export const Seo: FC<SeoProps> = (props) => {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta["title"] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#0E1116" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#0E1116" />
    </Head>
  )
}

const favicons: Array<React.ComponentPropsWithoutRef<"link">> = [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
  },
  { rel: "manifest", href: "/favicon/site.webmanifest" },
  { rel: "shortcut icon", href: "/favicon/favicon.ico" },
]
