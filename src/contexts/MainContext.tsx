import React from 'react'
import { getDistanceFromLatLonInKm } from 'src/shared/common/utils'

const KM_TO_NAUTICAL_MILES_RATIO = 0.539_957 // https://calculator-converter.com/kilometers-to-nautical-miles.htm

export const MainContext = React.createContext({} as IMainContext)

export const MainContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [distanceKM, setDistanceKM] = React.useState<number>(0)
  const [distanceNM, setDistanceNM] = React.useState<number>(0)

  const [locationA, setLocationA] = React.useState<ILocation>({ lat: '0', lon: '0' })
  const [locationB, setLocationB] = React.useState<ILocation>({ lat: '0', lon: '0' })

  const calculateDistanceInKM = React.useCallback(() => {
    const distanceInKM = getDistanceFromLatLonInKm(locationA.lat, locationA.lon, locationB.lat, locationB.lon)
    setDistanceKM(distanceInKM)
  }, [locationA, locationB])

  const calculateDistanceInNM = React.useCallback(() => {
    const distanceInNM = distanceKM * KM_TO_NAUTICAL_MILES_RATIO
    setDistanceNM(distanceInNM)
  }, [distanceKM])

  React.useEffect(() => {
    if (locationA.lat !== '0' && locationA.lon !== '0' && locationB.lat !== '0' && locationB.lon !== '0') {
      calculateDistanceInKM()
    }
  }, [locationA, locationB])

  React.useEffect(() => {
    calculateDistanceInNM()
  }, [distanceKM])

  const contextValues = React.useMemo(
    () => ({
      distanceKM,
      setDistanceKM,
      distanceNM,
      locationA,
      setLocationA,
      locationB,
      setLocationB
    }),
    [distanceKM, distanceNM, locationA]
  )

  return <MainContext.Provider value={contextValues}>{children}</MainContext.Provider>
}

export const useMainContext = (): IMainContext => {
  const context = React.useContext(MainContext)
  if (!context) {
    throw new Error('useMainContext must be used within an MainContextProvider')
  }
  return context
}
