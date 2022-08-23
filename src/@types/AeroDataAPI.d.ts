interface ILocation {
  lat: string
  lon: string
}

interface ICountry {
  name: string
  iso: string
}

interface IState {
  name: string
  abbr: string
  type: string
}

interface IAirport {
  name: string
  city: string
  iata: string
  latitude: string
  longitude: string
  country: ICountry
  state: IState
}

interface IAeroDataAPIResponse {
  airports: IAirport[]
  term: string
  limit: string
  size: number
  cached: boolean
  status: boolean
  statusCode: number
}
