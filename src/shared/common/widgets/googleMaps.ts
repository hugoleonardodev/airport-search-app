import { __TWO__ } from '@constants/globals'

import { getZoomByDistance } from '../utils'

const intialA = { lat: '7.434_876_909_631_617', lon: '80.442_495_123_461_3' } as ILocation
const intialB = { lat: '7.317_828_120_926_268_6', lon: '80.873_587_889_102_8' } as ILocation

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

  // see https://stackoverflow.com/questions/51816751/draw-lines-between-multiple-markers-on-google-map-using-java-script
  const line = new google.maps.Polyline({
    path: [start, end],
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1,
    strokeWeight: 2
  })

  line.setMap(map)
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
