import React from 'react'

import useDebounce from '@contexts/hooks/useDebounce'

import AutocompleteAsync from '@components/atoms/AutocompleteAsync'

import { ONE_SECOND } from '@constants/globals'

interface IAutoCompleteWrapProps {
  placeholderLabel: string
  setLocation: React.Dispatch<React.SetStateAction<ILocation>>
}

const AutocompleteWrap: React.FC<IAutoCompleteWrapProps> = ({ placeholderLabel, setLocation }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const debouncedSearch = useDebounce<string>(searchTerm, ONE_SECOND)
  const thisAutocomplete = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (searchTerm.length > 0 && thisAutocomplete.current) {
      setIsLoading(true)
    }
  }, [debouncedSearch, searchTerm])

  return (
    <div ref={thisAutocomplete}>
      <AutocompleteAsync
        debouncedSearch={debouncedSearch}
        setSearchTerm={setSearchTerm}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        placeholderLabel={placeholderLabel}
        setLocation={setLocation}
      />
    </div>
  )
}

export default AutocompleteWrap
