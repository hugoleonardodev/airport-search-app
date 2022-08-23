import React from 'react'

import { useMainContext } from '@contexts/MainContext'

import AutocompleteWrap from '@components/molecules/AutocompleteWrap'

import { __TWO__ } from '@constants/globals'
import { Grid } from '@mui/material'

const AIRPORT_DISTANCE_COLUMNS = { xs: 2, sm: 8, md: 12 }

const AirportDistance: React.FC = () => {
  const { setLocationA, locationA, setLocationB, distanceNM } = useMainContext()
  const [isDisabled, setIsDisabled] = React.useState(true)

  React.useEffect(() => {
    console.log(locationA.lat !== '0' && locationA.lon !== '0')
    if (locationA.lat !== '0' && locationA.lon !== '0') {
      setIsDisabled(false)
    }
  }, [locationA, setLocationA])

  // console.log(locationA.lat === '0' && locationA.lon === '0')
  return (
    <Grid container columns={AIRPORT_DISTANCE_COLUMNS}>
      <Grid xs={2} sm={4} md={4} item>
        <AutocompleteWrap
          placeholderLabel="Select Airport Location A"
          setLocation={setLocationA}
          // isDisabled={locationA.lat !== '0' && locationA.lon !== '0'}
        />
      </Grid>
      <Grid xs={2} sm={4} md={4} item>
        <AutocompleteWrap
          placeholderLabel="Select Airport Location B"
          setLocation={setLocationB}
          isDisabled={isDisabled}
        />
      </Grid>
      <Grid xs={2} sm={4} md={4} item display="flex" alignItems="end">
        <p>
          Nautical Miles distance: <strong>{distanceNM.toFixed(__TWO__)}</strong>{' '}
        </p>
      </Grid>
    </Grid>
  )
}

export default AirportDistance
