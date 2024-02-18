import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const APP_NAME = 'Multi Purposes App'
const APP_DESCRIPTION = 'Multi Purposes App'

export default class MyDocument extends Document {
  // eslint-disable-next-line
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      // eslint-disable-next-line
      ctx.renderPage = () => originalRenderPage({ enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />) })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        // eslint-disable-next-line
        styles: [...(initialProps.styles as any), ...sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
