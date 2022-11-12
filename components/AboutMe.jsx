import React from 'react'
import { prefix } from '../utils/prefix.js'
import { Grid, Image } from 'semantic-ui-react'

export default function AboutMe() {
  return (
    <section id="about-me">
      <Grid padded='horizontally'>
        <Grid.Row>
          <Grid.Column computer={8}></Grid.Column>
          <Grid.Column mobile={16} computer={7}>
            <h2 className='ml'>About me</h2>

            <div className='icons-container'>
              <Image src={`${prefix}/dot.png`} /> <Image src={`${prefix}/dot2.png`} /> <Image src={`${prefix}/dot3.png`} /> <Image src={`${prefix}/arrow right.png`} className='tight' /> <Image src={`${prefix}/arrow right.png`} className='tight' /> <Image src={`${prefix}/arrow right.png`} className='tight' /> <Image src={`${prefix}/dot4.png`} /> <Image src={`${prefix}/dot5.png`} /> <Image src={`${prefix}/dot6.png`} />
            </div>

            <div id="about-text">
              <p>I am Gabriel Epstein, born in Argentina.</p>
              <p>I am a multi-instrumentalist music producer focused on the fusion of electronic music with ethnic and tribal instruments.</p>
              <p>My travels through different cultures and the connection with shamanism is fully present and is the essence of my music.</p>
            </div>

            <div id='about-final-quote'>
              <p>I invite you to discover<br />the beauty of your true Nature.</p>
              <p>Let sound & vibration take you on this journey...</p>
            </div>

            <Image src={`${prefix}/down triangles.png`} centered style={{ opacity: .6 }} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  )
}