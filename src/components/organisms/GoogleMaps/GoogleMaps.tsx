import React from 'react'
import { googleMaps } from 'src/shared/common/widgets'

import { useMainContext } from '@contexts/MainContext'

const GoogleMaps: React.FC = () => {
  const { locationA, locationB, distanceKM } = useMainContext()

  React.useEffect(() => {
    if (locationA.lat !== '0' && locationA.lon !== '0' && locationB.lat !== '0' && locationB.lon !== '0') {
      googleMaps(locationA, locationB, distanceKM)
    }
  }, [locationA, locationB])

  return (
    <React.Fragment>
      {distanceKM === 0 ? (
        <div id="map">
          <h2>Welcome to Airport Distance Service</h2>
          <p>Search for airports and calculate the distance between it in Nautical Miles.</p>
          <p>Generate Google Maps marks for the chosen airports and trace the line between it!</p>
        </div>
      ) : (
        <React.Fragment>
          <div id="map"></div>
          <footer>Thanks for using the app.</footer>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default GoogleMaps
