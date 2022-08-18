import React from 'react'

import useDebounce from '@contexts/hooks/useDebounce'

import AutocompleteAsync from '@components/molecules/AutocompleteAsync'

import { ONE_SECOND } from '@constants/globals'

const AirportDistance: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const debouncedSearch = useDebounce<string>(searchTerm, ONE_SECOND)

  React.useEffect(() => {
    setIsLoading(true)
  }, [debouncedSearch])
  return (
    <div>
      <AutocompleteAsync
        debouncedSearch={debouncedSearch}
        setSearchTerm={setSearchTerm}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  )
}

export default AirportDistance
