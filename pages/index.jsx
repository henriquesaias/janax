import React from 'react'
import Head from 'next/head'
import Splash from '../components/Splash.jsx';
import HanaqQuote from '../components/HanaqQuote.jsx';
import AboutMe from '../components/AboutMe.jsx';
import Listen from '../components/Listen.jsx';
import Watch from '../components/Watch.jsx';
import Photos from '../components/Photos.jsx';
import Experience from '../components/Experience.jsx';
import Connect from '../components/Connect.jsx';
import TopMenu from '../components/TopMenu.jsx';
import { InView } from 'react-intersection-observer';

export default function Home() {
  const [section, setSection] = React.useState('splash')

  return (
    <div>
      <Head>
        <title>Janax Pacha</title>
        <meta name="description" content="The Land of Heaven" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='top-nav'>
        <TopMenu section={section} />
      </nav>

      <main>
        <InView initialInView={true} threshold={0.5} onChange={(inView) => inView && setSection('splash')}>
          <Splash />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('quote')}>
          <HanaqQuote />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('about-me')}>
          <AboutMe />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('listen')}>
          <Listen />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('watch')}>
          <Watch />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('experience')}>
          <Experience />
        </InView>
        
        <InView threshold={0.5} onChange={(inView) => inView && setSection('photos')}>
          <Photos />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('connect')}>
          <Connect />
        </InView>
      </main>
    </div >
  )
}
