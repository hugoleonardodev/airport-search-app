import { NextPage } from 'next'
import React from 'react'

import AutocompleteAsync from '@components/molecules/AutocompleteAsync'

import HomeBoxSX from '@constants/MyBox'
import { Box, Container } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={HomeBoxSX}>
        <AutocompleteAsync />
      </Box>
    </Container>
  )
}
export default Home
