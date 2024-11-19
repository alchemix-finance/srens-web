import { ButtonHTMLAttributes, FC } from "react"

import { clsxm } from "@/lib"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={clsxm(
        "rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800",
        className,
      )}
      type="button"
      {...props}
    />
  )
}

export const HeaderButton: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      className={clsxm(
        "border border-comet-600 bg-comet-700 px-3 py-1.5 text-sm text-comet-100 transition-colors hover:border-comet-500 hover:bg-comet-600 hover:text-white",
        className,
      )}
      {...props}
    />
  )
}
