import { __TWO__ } from '@constants/globals'

const intialA = { lat: '7.434_876_909_631_617', lon: '80.442_495_123_461_3' } as ILocation
const intialB = { lat: '7.317_828_120_926_268_6', lon: '80.873_587_889_102_8' } as ILocation

const ZOOM_TWO_TIMES = 2
const ZOOM_FOUR_TIMES = 4
const ZOOM_SIX_TIMES = 6
const ZOOM_EIGHT_TIMES = 8

const ONE_KM = 1
const FIVE_HUNDRED_KM = 500
const ONE_THOUSAND_KM = 1000
const FIVE_THOUSAND_KM = 5000

const getZoomByDistance = (distance: number): number => {
  if (distance >= FIVE_THOUSAND_KM) {
    return ZOOM_TWO_TIMES
  }
  if (distance > ONE_THOUSAND_KM && distance < FIVE_THOUSAND_KM) {
    return ZOOM_FOUR_TIMES
  }
  if (distance > FIVE_HUNDRED_KM && distance < ONE_THOUSAND_KM) {
    return ZOOM_SIX_TIMES
  }
  if (distance > ONE_KM && distance < FIVE_HUNDRED_KM) {
    return ZOOM_EIGHT_TIMES
  }
}

const googleMaps = (locationA = intialA, locationB = intialB, distance = 5000): void => {
  const start = new google.maps.LatLng(Number(locationA.lat), Number(locationA.lon))
  const end = new google.maps.LatLng(Number(locationB.lat), Number(locationB.lon))

  // see https://www.technipages.com/google-maps-how-to-find-the-halfway-point
  const mid = new google.maps.LatLng(
    (Number(locationB.lat) + Number(locationA.lat)) / __TWO__,
    (Number(locationB.lon) + Number(locationA.lon)) / __TWO__
  )
  const option = {
    zoom: getZoomByDistance(distance),
    center: mid
  }
  const map = new google.maps.Map(document.querySelector('#map'), option)
  // const display = new google.maps.DirectionsRenderer()
  // const services = new google.maps.DirectionsService()
  const markerA = new google.maps.Marker({
    position: start,
    map
  })
  const markerB = new google.maps.Marker({
    position: end,
    map
  })

  if (markerA && markerB) {
    markerB.setMap(map)
  }
  // To add the marker to the map, call setMap();
  // markerA.setMap(map)
  // display.setMap(map)
  // const request = {
  //   origin: start,
  //   destination: end,
  //   travelMode: 'DRIVING' as google.maps.TravelMode // for directions
  // }

  // services.route(request, (result, status) => {
  //   if (status === 'OK') {
  //     display.setDirections(result)
  //   }
  // })
}

export default googleMaps
