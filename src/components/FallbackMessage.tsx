import { FC, PropsWithChildren } from "react"

import { clsxm } from "@/lib"

type FallbackMessageProps = {
  className?: string
  variant: "transparent" | "black"
}

export const FallbackMessage: FC<PropsWithChildren<FallbackMessageProps>> = ({ className, children, variant }) => {
  return (
    <div
      className={clsxm(
        "flex w-full items-center justify-center rounded p-4 max-md:text-sm md:h-[134px] md:px-6 md:py-4",
        { "bg-comet-800 text-comet-300": variant === "black" },
        className,
      )}
    >
      {children}
    </div>
  )
}
