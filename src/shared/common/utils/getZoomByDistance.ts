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

export default getZoomByDistance
