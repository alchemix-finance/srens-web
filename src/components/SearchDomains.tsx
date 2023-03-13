import { useQuery } from "@tanstack/react-query"
import {
  ChangeEventHandler,
  createRef,
  FC,
  FormEventHandler,
  KeyboardEventHandler,
  useState,
} from "react"
import { FiX } from "react-icons/fi"

import { queries } from "@/lib/query"

import { Domain } from "@/components/Domain"
import { FallbackMessage } from "@/components/FallbackMessage"
import { Spinner } from "@/components/Spinner"

export const SearchDomains: FC = () => {
  const inputRef = createRef<HTMLInputElement>()

  const [value, setValue] = useState<string>("")
  const [submitted, setSubmitted] = useState<string>("")

  const { data, isError, isLoading } = useQuery({
    ...queries.domains.lookup(submitted ?? ""),
    enabled: !!submitted,
  })

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!value || value.length < 3) return
    if (value.endsWith(".eth")) setSubmitted(value)
    else setSubmitted(`${value}.eth`)
  }

  const onClear = () => {
    setValue("")
    setSubmitted("")
    inputRef.current?.focus?.()
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value)

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Escape") onClear()
  }

  return (
    <>
      <form
        className="grid grid-cols-[1fr,auto] grid-rows-[1fr,auto,auto]"
        onSubmit={onSubmit}
      >
        <input
          id="domain"
          ref={inputRef}
          className="peer relative z-10 col-start-1 row-start-2 block w-full rounded bg-transparent px-4 py-3 text-lg text-white placeholder:text-comet-500 focus:outline-none md:py-4 md:text-3xl"
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          spellCheck="false"
          placeholder="vitalik.eth"
        />
        <button
          className="focus-focus-visible:ring-bronze peer relative z-10 col-start-2 row-start-2 rounded px-4 text-sm uppercase text-comet-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-bronze focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800 enabled:hover:underline disabled:opacity-0"
          disabled={!value && !submitted}
          onClick={onClear}
          type="button"
        >
          <span className="sr-only">Clear search</span>
          <FiX className="h-5 w-5 md:h-7 md:w-7" />
        </button>

        <div className="col-span-full col-start-1 row-start-2 rounded border border-comet-700 bg-comet-800 peer-focus:ring-1 peer-focus:ring-inset peer-focus:ring-comet-500" />
      </form>
      {!!submitted && (
        <div className="grid min-h-[4.5rem]">
          {isLoading ? (
            <FallbackMessage>
              <Spinner className="h-8 w-8" />
            </FallbackMessage>
          ) : isError ? (
            <FallbackMessage className="bg-comet-700">
              Error finding domains
            </FallbackMessage>
          ) : !data?.domains.length ? (
            <FallbackMessage className="bg-comet-700">
              Domain not found
            </FallbackMessage>
          ) : (
            data.domains.map((domain) => (
              <Domain
                key={domain.id}
                name={domain.name}
                expiryDate={domain.registration?.expiryDate}
                registrationDate={domain.registration?.registrationDate}
                renewalEvents={domain.registration?.events}
              />
            ))
          )}
        </div>
      )}
    </>
  )
}
