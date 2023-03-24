import { useQuery } from "@tanstack/react-query"
import {
  ChangeEventHandler,
  createRef,
  Dispatch,
  FC,
  FormEventHandler,
  KeyboardEventHandler,
  SetStateAction,
} from "react"
import { FiX } from "react-icons/fi"

import { queries } from "@/lib"

import { Domain } from "@/components/Domain"
import { FallbackMessage } from "@/components/FallbackMessage"
import { Spinner } from "@/components/Spinner"

type SearchDomainsProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  submitted: string
  setSubmitted: Dispatch<SetStateAction<string>>
}

export const SearchDomains: FC<SearchDomainsProps> = ({ value, setValue, submitted, setSubmitted }) => {
  const inputRef = createRef<HTMLInputElement>()

  const { data, isError, isLoading } = useQuery({
    ...queries.domains.list([submitted ?? ""]),
    enabled: !!submitted,
  })
  const domain = data?.domains?.[0]

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!value || value.length < 3) return
    if (value.endsWith(".eth")) setSubmitted(value.toLowerCase())
    else setSubmitted(`${value}.eth`.toLowerCase())
  }

  const onClear = () => {
    setValue("")
    setSubmitted("")
    inputRef.current?.focus?.()
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value)

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Escape") onClear()
  }

  return (
    <>
      <form className="grid grid-cols-[1fr,auto] grid-rows-[1fr,auto,auto]" onSubmit={onSubmit}>
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
          className="peer relative z-10 col-start-2 row-start-2 rounded px-4 text-sm uppercase text-comet-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-bronze focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-comet-800 enabled:hover:underline disabled:opacity-0"
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
            <FallbackMessage variant="transparent">
              <Spinner className="h-8 w-8" />
            </FallbackMessage>
          ) : isError ? (
            <FallbackMessage variant="black">Error finding domains</FallbackMessage>
          ) : !domain ? (
            <FallbackMessage variant="black">Domain not found</FallbackMessage>
          ) : (
            <Domain
              key={domain.registration?.id}
              name={domain.name}
              expiryDate={domain.registration?.expiryDate}
              registrationDate={domain.registration?.registrationDate}
              renewalEvents={domain.registration?.events}
            />
          )}
        </div>
      )}
    </>
  )
}
