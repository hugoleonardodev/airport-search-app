import { NextPage } from 'next'
import React from 'react'

// import AnchorLink from '@components/atoms/AnchorLink'
import AirportDistance from '@components/organisms/AirportDistance'
import GoogleMaps from '@components/organisms/GoogleMaps'

import HomeBoxSX from '@constants/MyBox'
import { Box, Container } from '@mui/material'

const Login: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={HomeBoxSX}>
        <AirportDistance />
      </Box>
      <GoogleMaps />
    </Container>
  )
}

export default Login
