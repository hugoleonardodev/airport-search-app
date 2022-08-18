/**
 * @see https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/pages/_app.tsx
 */
import { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'

import createEmotionCache from '@configs/createEmotionCache'
import theme from '@configs/theme'
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import '@styles/fonts.css'
import '@styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface IMyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: React.FC<IMyAppProps> = properties => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = properties
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
