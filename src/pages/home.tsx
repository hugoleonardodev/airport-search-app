import { NextPage } from 'next'
import React from 'react'

import AirportDistance from '@components/organisms/AirportDistance'

import HomeBoxSX from '@constants/MyBox'
import { Box, Container } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={HomeBoxSX}>
        <AirportDistance />
      </Box>
    </Container>
  )
}
export default Home
