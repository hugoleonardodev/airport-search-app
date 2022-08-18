import { NextPage } from 'next'
import React from 'react'

import AnchorLink from '@components/atoms/AnchorLink'
import GoogleMaps from '@components/organisms/GoogleMaps'

import HomeBoxSX from '@constants/MyBox'
import { ProductionQuantityLimitsSharp } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'

const Login: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={HomeBoxSX}>
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <AnchorLink href="/home" color="secondary">
          Go to the home page
        </AnchorLink>
        <ProductionQuantityLimitsSharp />
      </Box>
      <GoogleMaps />
    </Container>
  )
}

export default Login
