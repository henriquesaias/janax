import React from 'react'
import Head from 'next/head'
import Splash from '../components/Splash.js';
import HanaqQuote from '../components/HanaqQuote.js';
import AboutMe from '../components/AboutMe.js';
import Listen from '../components/Listen.js';
import Watch from '../components/Watch.js';
import Photos from '../components/Watch.js';
import Experience from '../components/Experience.js';
import Connect from '../components/Connect.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Janax Pacha</title>
        <meta name="description" content="The Land of Heaven" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Splash />

        <HanaqQuote />

        <AboutMe />

        <Listen />

        <Watch />

        <Experience />

        <Photos />

        <Connect />
      </main>
    </div >
  )
}
