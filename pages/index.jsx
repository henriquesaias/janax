import React, { useEffect, useState } from 'react'
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
import { Icon, Image } from 'semantic-ui-react';
import { prefix } from '../utils/prefix.js'

export default function Home() {
  const [section, setSection] = useState('splash')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <div className='scroll-line'></div>
      <Head>
        <title>Janax Pacha</title>
        <meta name="description" content="The Land of Heaven" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!menuOpen
        ? <Icon
          name={menuOpen ? 'close' : 'bars'}
          className={`mobile-only expand-from-center menu-icon ${menuOpen ? 'open-menu' : 'closed-menu'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          size='large'
        />
        : <span className={`mobile-only expand-from-center menu-icon ${menuOpen ? 'open-menu' : 'closed-menu'}`}>
          <Image onClick={() => setMenuOpen(!menuOpen)} style={{
            paddingTop: 3,
            paddingRight: 10
          }} src={`${prefix}/close.png`} />
        </span>
      }
      <nav className={`top-nav ${menuOpen ? 'open-menu' : 'closed-menu'} ${section === 'splash' || section === 'quote' ? 'hidden' : ''}`}>
        <TopMenu setMenuOpen={setMenuOpen} section={section} />
      </nav>

      <main>
        <InView initialInView={true} threshold={0.5} onChange={(inView) => inView && setSection('splash')}>
          <Splash />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('quote')}>
          <HanaqQuote section={section} />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('about-me')}>
          <AboutMe section={section} />
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
