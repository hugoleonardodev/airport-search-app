import React from 'react'

import AirportDistance from '@components/organisms/AirportDistance'
import GoogleMaps from '@components/organisms/GoogleMaps'

import HomeBoxSX from '@constants/MyBox'
import { Box, Container } from '@mui/material'

const HomeTemplate: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={HomeBoxSX}>
        <AirportDistance />
      </Box>
      <GoogleMaps />
    </Container>
  )
}

export default HomeTemplate
