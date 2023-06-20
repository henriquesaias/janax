
import { Html, Head, Main, NextScript } from 'next/document'
import { Script } from 'next/head'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Averia+Sans+Libre:ital@0;1&family=Cabin+Sketch&family=Neucha&family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7127008256948874"
          crossorigin="anonymous" 
          onError={ (e) => { console.error('Script failed to load', e) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
