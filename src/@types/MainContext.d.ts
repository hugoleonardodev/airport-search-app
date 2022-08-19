interface IMainContext {
  distanceKM: number
  setDistanceKM: React.Dispatch<React.SetStateAction<number>>
  distanceNM: number
  setLocationA: React.Dispatch<React.SetStateAction<ILocation>>
  locationA: ILocation
  setLocationB: React.Dispatch<React.SetStateAction<ILocation>>
  locationB: ILocation
}
