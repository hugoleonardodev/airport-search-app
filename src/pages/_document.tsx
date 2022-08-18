/**
 * @see https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/pages/_document.tsx
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import createEmotionCache from '@configs/createEmotionCache'
import createEmotionServer from '@emotion/server/create-instance'

class HTMLDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta */}
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3.0, user-scalable=1" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default HTMLDocument

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
HTMLDocument.getInitialProps = async context => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = context.renderPage

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(properties) {
          return <App emotionCache={cache} {...properties} />
        }
    })

  const initialProps = await Document.getInitialProps(context)
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map(style => {
    const { css, key, ids } = style

    return (
      <style
        data-emotion={`${key} ${ids.join(' ')}`}
        key={key}
        // eslint-disable-next-line react/no-danger, react-perf/jsx-no-new-object-as-prop
        dangerouslySetInnerHTML={{ __html: css }}
      />
    )
  })

  return {
    ...initialProps,
    emotionStyleTags
  }
}
