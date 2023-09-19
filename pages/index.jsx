import React, { useState } from 'react'
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
import Player from '../components/Player.jsx';

export default function Home() {
  const [section, setSection] = useState('splash')
  const [triggered, setTriggered] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  React.useEffect(() => {
    const exists = triggered.includes(section)
    if (exists) return
    setTriggered([...triggered, section])
  }, [section])

  return (
    <div>
      <div className='scroll-line'></div>
      <Head>
        <title>Janax Pacha</title>
        <meta name="description" content="The Land of Heaven" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon-dorado.png" />
      </Head>

      <span className='mobile-only menu-icon'>
        <Player />
      </span>
      {!menuOpen
        ? <Icon
          name={menuOpen ? 'close' : 'bars'}
          className={`mobile-only expand-from-center menu-icon ${menuOpen ? 'open-menu' : 'closed-menu'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          size='large'
        />
        : <span className={`mobile-only expand-from-center menu-icon ${menuOpen ? 'open-menu' : 'closed-menu'}`}>
          <Image alt='' onClick={() => setMenuOpen(!menuOpen)} style={{
            paddingTop: 3,
            paddingRight: 10
          }} src={`${prefix}/close.png`} />
        </span>
      }
      <nav className={`top-nav ${menuOpen ? 'open-menu' : 'closed-menu'} ${section === 'splash' ? 'hidden' : ''}`}>
        <TopMenu
          setMenuOpen={setMenuOpen}
          section={section}
        />
      </nav>

      <main>
        <InView initialInView={true} threshold={0.5} onChange={(inView) => inView && setSection('splash')}>
          <Splash />
        </InView>

        <InView threshold={0.2} onChange={(inView) => inView && setSection('quote')}>
          <HanaqQuote section={section} triggered={triggered.includes('quote')} />
        </InView>

        <InView threshold={0.2} onChange={(inView) => inView && setSection('about-me')}>
          <AboutMe section={section} triggered={triggered.includes('about-me')} />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('listen')} style={{ marginTop: -1 }}>
          <Listen />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('watch')}>
          <Watch />
        </InView>

        <InView threshold={0.2} onChange={(inView) => inView && setSection('experience')}>
          <Experience section={section} triggered={triggered.includes('experience')} />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('photos')} style={{ marginTop: -1 }}>
          <Photos />
        </InView>

        <InView threshold={0.5} onChange={(inView) => inView && setSection('connect')}>
          <Connect />
        </InView>
      </main>
    </div >
  )
}
