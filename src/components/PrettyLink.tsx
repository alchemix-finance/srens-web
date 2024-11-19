import Link, { LinkProps } from "next/link"
import { FC, PropsWithChildren } from "react"
import { FiExternalLink } from "react-icons/fi"

import { clsxm } from "@/lib"

type LinkExternalProps = LinkProps & {
  className?: string
  external?: boolean
}

export const PrettyLink: FC<PropsWithChildren<LinkExternalProps>> = ({ children, className, external, ...props }) => {
  return (
    <Link
      {...props}
      className={clsxm(
        "rounded underline underline-offset-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800",
        { "inline-flex items-center gap-1": external },
        className,
      )}
      {...(external && { target: "blank" })}
    >
      <span className="">{children}</span>
      {external && <FiExternalLink />}
    </Link>
  )
}
