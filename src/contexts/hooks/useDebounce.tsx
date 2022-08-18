import React from 'react'

/**
 * @see https://usehooks.com/useDebounce/
 * @example
  function App() {
  // State and setters for ...
  // Search term
  const [searchTerm, setSearchTerm] = useState<string>('')
  // API search results
  const [results, setResults] = useState<any[]>([])
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState<boolean>(false)
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  // We pass generic type, this case string
  const debouncedSearchTerm: string = useDebounce<string>(searchTerm, 500)
  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        searchCharacters(debouncedSearchTerm).then(results => {
          setIsSearching(false)
          setResults(results)
        })
      } else {
        setResults([])
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  )
  return (
    <div>
      <input
        placeholder="Search Marvel Comics"
        onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
      />
      {isSearching && <div>Searching ...</div>}
      {results.map(result => (
        <div key={result.id}>
          <h4>{result.title}</h4>
          <img src={`${result.thumbnail.path}/portrait_incredible.${result.thumbnail.extension}`} />
        </div>
      ))}
    </div>
  )
}
// API search function
async function searchCharacters(search: string): Promise<any[]> {
  const apiKey = 'f9dfb1e8d466d36c27850bedd2047687'
  return fetch(`https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&titleStartsWith=${search}`, {
    method: 'GET'
  })
    .then(r => r.json())
    .then(r => r.data.results)
    .catch(error => {
      console.error(error)
      return []
    })
}
 */
// T is a generic type for value parameter, our case this will be string
function useDebounce<T>(value: T, delay: number): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value)
  React.useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes
  )
  return debouncedValue
}

export default useDebounce
