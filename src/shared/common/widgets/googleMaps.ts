const intialA = { lat: 7.434_876_909_631_617, lon: 80.442_495_123_461_3 } as ILocation
const intialB = { lat: 7.317_828_120_926_268_6, lon: 80.873_587_889_102_8 } as ILocation

const googleMaps = (locationA = intialA, locationB = intialB): void => {
  const start = new google.maps.LatLng(locationA.lat, locationA.lon)
  const end = new google.maps.LatLng(locationB.lat, locationB.lon)
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
    travelMode: 'DRIVING' as google.maps.TravelMode
  }

  services.route(request, (result, status) => {
    if (status === 'OK') {
      display.setDirections(result)
    }
  })
}

export default googleMaps
