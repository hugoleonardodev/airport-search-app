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
}

// function sleep(delay = 0) {
//   return new Promise(resolve => {
//     setTimeout(resolve, delay)
//   })
// }

// const ONE_SECOND = 1000
const AUTOCOMPLETE_WIDTH = { width: 300 }

const AutocompleteAsync: React.FC<IAutoCompleteAsyncProps> = ({
  debouncedSearch,
  setSearchTerm,
  isLoading,
  setIsLoading
}) => {
  const [isOpen, setisOpen] = React.useState(false)
  const [options, setOptions] = React.useState<readonly TItem[]>([])
  // const isLoading = isOpen && options.length === 0

  const handleClose = React.useCallback(() => {
    setisOpen(false)
  }, [])

  const handleOpen = React.useCallback(() => {
    setisOpen(true)
  }, [])

  const isOptionEqualToValue = React.useCallback((option: TItem, value: TItem) => {
    return option.name === value.name
  }, [])

  const getOptionLabel = React.useCallback((option: TItem) => {
    return option.name
  }, [])

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.currentTarget.value)
    },
    [setSearchTerm]
  )

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
          label="Asynchronous"
          InputProps={inputProps(params)}
          value={debouncedSearch}
          onChange={handleChange}
        />
      )
    },
    [inputProps]
  )

  React.useEffect(() => {
    let isActive = debouncedSearch !== '' && debouncedSearch.length > 2

    if (!isLoading) {
      return
    }

    ;(async () => {
      if (isActive) {
        const results = await getAiportByFreeText(debouncedSearch)
        console.log('results', results)
        setOptions(results.data.items)
        setIsLoading(false)
      }
    })()

    return () => {
      isActive = false
    }
  }, [isLoading, debouncedSearch, setOptions, setIsLoading])

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
      // onHighlightChange={}
    />
  )
}

export default AutocompleteAsync
