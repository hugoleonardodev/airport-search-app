interface ILocation {
  lat: number;
  lon: number;
}

type TItem = {
  icao: string;
  iata: string;
  localCode: string;
  name: string;
  shortName: string;
  municipalityName: string;
  location: Location;
  countryCode: string;
}

interface IAeroDataAPIResponse {
  items: TItem[];
}
