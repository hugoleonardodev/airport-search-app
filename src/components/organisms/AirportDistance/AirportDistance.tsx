import React from 'react'

import { useMainContext } from '@contexts/MainContext'

import AutocompleteWrap from '@components/molecules/AutocompleteWrap'

import { __TWO__ } from '@constants/globals'
import { Grid } from '@mui/material'

const AIRPORT_DISTANCE_COLUMNS = { xs: 2, sm: 8, md: 12 }

const AirportDistance: React.FC = () => {
  const { setLocationA, setLocationB, distanceNM } = useMainContext()
  return (
    <Grid container columns={AIRPORT_DISTANCE_COLUMNS}>
      <Grid xs={2} sm={4} md={4} item>
        <AutocompleteWrap placeholderLabel="Select Location A" setLocation={setLocationA} />
      </Grid>
      <Grid xs={2} sm={4} md={4} item>
        <AutocompleteWrap placeholderLabel="Select Location B" setLocation={setLocationB} />
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
