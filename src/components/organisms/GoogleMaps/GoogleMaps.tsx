import React from 'react'

function myfunction() {
  console.log('myfunction')
  const start = new google.maps.LatLng(7.434_876_909_631_617, 80.442_495_123_461_3)
  const end = new google.maps.LatLng(7.317_828_120_926_268_6, 80.873_587_889_102_8)
  const option = {
    zoom: 10,
    center: start
  }
  const map = new google.maps.Map(document.querySelector('#map'), option)
  const display = new google.maps.DirectionsRenderer()
  const services = new google.maps.DirectionsService()
  display.setMap(map)
  const request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  }
  // eslint-disable-next-line space-before-function-paren
  services.route(request, function (result, status) {
    if (status === 'OK') {
      display.setDirections(result)
    }
  })
}

const GoogleMaps: React.FC = () => {
  React.useEffect(() => {
    myfunction()
  }, [])

  return (
    <div id="map">
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtDGC4KRUJOAHMIje7qfCgYfr-TIDNgJM&libraries=places"
      ></script>
    </div>
  )
}

export default GoogleMaps
