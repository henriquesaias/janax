import React from 'react'
import { useRouter } from 'next/router'
import { prefix } from '../utils/prefix.js'
import { Grid, Image } from 'semantic-ui-react'

export default function AboutMe({ section }) {
  const router = useRouter()

  return (
    <section id="about-me">
      <Grid padded='horizontally'>
        <Grid.Row>
          <Grid.Column computer={8}></Grid.Column>
          <Grid.Column mobile={16} computer={7}>
            <h2 className='ml'>About me</h2>

            <div className='icons-container'>
              <Image alt='' src={`${prefix}/dot.png`} /> <Image alt='' src={`${prefix}/dot2.png`} /> <Image alt='' src={`${prefix}/dot3.png`} /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/dot4.png`} /> <Image alt='' src={`${prefix}/dot5.png`} /> <Image alt='' src={`${prefix}/dot6.png`} />
            </div>

            <div id="about-text" className={section === 'about-me' ? 'animate-into-view' : 'animate-out-of-view'}>
              <p>I am Gabriel Epstein, born in Argentina.</p>
              <p>I am a multi-instrumentalist music producer focused on the fusion of electronic music with ethnic and tribal instruments.</p>
              <p>My travels through different cultures and the connection with shamanism is fully present and is the essence of my music.</p>
            </div>

            <div id='about-final-quote' className={section === 'about-me' ? 'animate-into-view' : 'animate-out-of-view'}>
              <p>I invite you to discover<br />the beauty of your true Nature.</p>
              <p>Let sound & vibration take you on this journey...</p>
            </div>

            <Image
              alt=''
              src={`${prefix}/down triangles.png`}
              centered
              className='triangle-down'
              style={{ opacity: .6 }}
              onClick={() => router.push('#listen')}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  )
}