import React from 'react'
import { googleMaps } from 'src/shared/common/widgets'

const GoogleMaps: React.FC = () => {
  React.useEffect(() => {
    googleMaps()
  }, [])

  return (
    <div id="map">
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA9A6PngCVXblm99gTxRq9T4Nf3qvcXUig&libraries=places"
      ></script>
    </div>
  )
}

export default GoogleMaps
