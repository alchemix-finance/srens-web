import { FC } from "react"
import { FiAlertTriangle } from "react-icons/fi"

export const SrensUnavailable: FC = () => {
  return (
    <div className="md:layout mb-3 md:my-6">
      <div className="relative overflow-hidden border-b border-red/40 bg-gradient-to-br from-red/10 to-red/30 px-4 pb-6 pt-4 md:rounded-xl md:border md:p-6">
        <div className="flex items-start justify-between">
          <h1 className="relative z-10 mb-3 text-lg font-medium text-[#fea9a8] md:text-xl lg:text-2xl">
            <FiAlertTriangle className="mr-2.5 inline h-6 w-6 -translate-y-0.5 stroke-red" />
            SRENS is currently unavailable
          </h1>
        </div>
        <p className="relative z-10 max-w-prose text-sm leading-relaxed md:text-base md:leading-loose">
          Due to changes with Gelato, Self-Repaying ENS (SRENS) is currently broken. Any existing renewal tasks will not
          be executed. We&apos;re working on a fix.
        </p>
      </div>
    </div>
  )
}
SrensUnavailable.displayName = "SrensUnavailable"
