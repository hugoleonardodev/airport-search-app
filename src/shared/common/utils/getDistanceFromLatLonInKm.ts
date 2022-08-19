import { __TWO__ } from '@constants/globals'

const PI_DEGREES = 180

function deg2rad(deg) {
  return deg * (Math.PI / PI_DEGREES)
}

function getDistanceFromLatLonInKm(latA: number, lonA: number, latB: number, lonB: number): number {
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(latB - latA) // deg2rad below
  const dLon = deg2rad(lonB - lonA)
  const a =
    Math.sin(dLat / __TWO__) * Math.sin(dLat / __TWO__) +
    Math.cos(deg2rad(latA)) * Math.cos(deg2rad(latB)) * Math.sin(dLon / __TWO__) * Math.sin(dLon / __TWO__)

  const c = __TWO__ * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in km
  return d
}

export default getDistanceFromLatLonInKm
