import * as React from 'react'

import getAiportByFreeText from '@services/AeroDataAPI/getAirportByFreeText'

import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'

interface IAutoCompleteAsyncProps {
  debouncedSearch: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  placeholderLabel: string
  setLocation: React.Dispatch<React.SetStateAction<ILocation>>
}

const AUTOCOMPLETE_WIDTH = { width: 300 }
const MIN_SEARCH_LENGTH = 2

const AutocompleteAsync: React.FC<IAutoCompleteAsyncProps> = ({
  debouncedSearch,
  setSearchTerm,
  isLoading,
  setIsLoading,
  placeholderLabel = 'Search',
  setLocation
}) => {
  const [isOpen, setisOpen] = React.useState(false)
  const [options, setOptions] = React.useState<readonly IAirport[]>([])
  const thisAutocomplete = React.useRef<AutocompleteRenderInputParams>(null)

  const handleClose = React.useCallback(() => {
    setisOpen(false)
  }, [])

  const handleOpen = React.useCallback(() => {
    setisOpen(true)
  }, [])

  const isOptionEqualToValue = React.useCallback((option: IAirport, value: IAirport) => {
    return option.name === value.name || option.iata === value.iata
  }, [])

  const getOptionLabel = React.useCallback((option: IAirport) => {
    return `${option.name}, ${option.iata}`
  }, [])

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.currentTarget.value)
    },
    [setSearchTerm]
  )

  const handleSelect = React.useCallback((event: React.SyntheticEvent<Element, Event>, option: IAirport) => {
    event.preventDefault()
    if (option?.city) {
      console.log('handleSelect', option)
      const currentLocation = { lat: option.latitude, lon: option.longitude }
      setLocation(currentLocation)
    }
  }, [])

  const inputProps = (params: AutocompleteRenderInputParams) => {
    return {
      ...params.InputProps,
      endAdornment: (
        <React.Fragment>
          {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
          {params.InputProps.endAdornment}
        </React.Fragment>
      )
    }
  }

  const renderInput = React.useCallback(
    (params: AutocompleteRenderInputParams) => {
      return (
        <TextField
          {...params}
          label={placeholderLabel}
          InputProps={inputProps(params)}
          value={debouncedSearch}
          onChange={handleChange}
        />
      )
    },
    [inputProps]
  )

  React.useEffect(() => {
    let isActive = debouncedSearch !== '' && debouncedSearch.length > MIN_SEARCH_LENGTH

    if (!isLoading) {
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      if (isActive) {
        const results = await getAiportByFreeText(debouncedSearch)
        console.log('results', results)
        setOptions(results.data.airports)
        setIsLoading(false)
      }
    })()

    return () => {
      isActive = false
    }
  }, [isLoading, setIsLoading, debouncedSearch, setOptions, options])

  React.useEffect(() => {
    if (!isOpen) {
      setOptions([])
    }
  }, [isOpen])

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={AUTOCOMPLETE_WIDTH}
      open={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      options={options}
      loading={isLoading}
      renderInput={renderInput}
      onChange={handleSelect}
      ref={thisAutocomplete}
    />
  )
}

export default AutocompleteAsync
