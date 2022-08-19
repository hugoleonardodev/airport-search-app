import React from 'react'
import { googleMaps } from 'src/shared/common/widgets'

import { useMainContext } from '@contexts/MainContext'

const GoogleMaps: React.FC = () => {
  const { locationA, locationB, distanceKM } = useMainContext()

  React.useEffect(() => {
    if (locationA.lat !== 0 && locationA.lon !== 0 && locationB.lat !== 0 && locationB.lon !== 0) {
      googleMaps(locationA, locationB, distanceKM)
    }
  }, [locationA, locationB])

  return (
    <div id="map">
      {distanceKM === 0 && (
        <React.Fragment>
          <h2>Welcome to Airport Distance Service</h2>
          <p>Search for airports and calculate the distance between it in Kilometers and Nautical Miles.</p>
          <p>Generate Google Maps marks for the chosen airports!</p>
        </React.Fragment>
      )}
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA9A6PngCVXblm99gTxRq9T4Nf3qvcXUig&libraries=places"
      />
    </div>
  )
}

export default GoogleMaps
