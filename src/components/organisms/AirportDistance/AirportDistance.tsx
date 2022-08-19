import React from 'react'

import { useMainContext } from '@contexts/MainContext'

import AutocompleteWrap from '@components/molecules/AutocompleteWrap'

import { Grid } from '@mui/material'

const AIRPORT_DISTANCE_COLUMNS = { xs: 2, sm: 8, md: 12 }

const AirportDistance: React.FC = () => {
  const { setLocationA, setLocationB, distanceKM, distanceNM } = useMainContext()
  return (
    <Grid container columns={AIRPORT_DISTANCE_COLUMNS}>
      <Grid xs={2} sm={4} md={4} item>
        <AutocompleteWrap placeholderLabel="Select Location A" setLocation={setLocationA} />
      </Grid>
      <Grid xs={2} sm={4} md={4} item>
        <AutocompleteWrap placeholderLabel="Select Location B" setLocation={setLocationB} />
      </Grid>
      <Grid xs={2} sm={4} md={4} item>
        <h1>{distanceKM}</h1>
        <h1>{distanceNM}</h1>
      </Grid>
    </Grid>
  )
}

export default AirportDistance
