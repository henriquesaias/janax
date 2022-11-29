import React from 'react'
import { prefix } from '../utils/prefix.js'
import { Button, Grid, Icon, Image } from 'semantic-ui-react'

export default function Connect() {
  return (
    <section id="connect" className='full-page'>
      <Grid container padded='horizontally'>
        <Grid.Row>
          <Grid.Column computer={4}></Grid.Column>
          <Grid.Column mobile={16} computer={12}>
            <h2>Support the Mission</h2>

            <div className='soundcloud-arrows connect-arrows'>
              <Image alt='' src={`${prefix}/vector arrow 1.png`} />
              <Image alt='' src={`${prefix}/vector arrow 2.png`} />
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href='https://paypal.me/janaxpachamusica' target="_blank">
                <Button circular basic className='paypal-btn'><Icon circular size='huge' name='paypal' fitted /></Button>
              </a>
            </div>

            <div id='connect-contacts' className='py3'>
              BOOKINGS
              <br className='mobile-only' />
              <div className='icons-container hidden-mobile'>
                <Image alt='' src={`${prefix}/dot.png`} /> <Image alt='' src={`${prefix}/dot2.png`} /> <Image alt='' src={`${prefix}/dot3.png`} /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/dot4.png`} /> <Image alt='' src={`${prefix}/dot5.png`} /> <Image alt='' src={`${prefix}/dot6.png`} />
                &nbsp;
              </div>
              <a href='mailto:artists@nativo-music.com' target="_blank">artists@nativo-music.com</a>
              <br />
              <div className='icons-container mobile-only'>
                <Image alt='' src={`${prefix}/dot.png`} /> <Image alt='' src={`${prefix}/dot2.png`} /> <Image alt='' src={`${prefix}/dot3.png`} /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/dot4.png`} /> <Image alt='' src={`${prefix}/dot5.png`} /> <Image alt='' src={`${prefix}/dot6.png`} />
              </div>
              <br className='mobile-only' />
              CONTACT
              <br className='mobile-only' />
              <div className='icons-container hidden-mobile'>
                <Image alt='' src={`${prefix}/dot.png`} /> <Image alt='' src={`${prefix}/dot2.png`} /> <Image alt='' src={`${prefix}/dot3.png`} /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/arrow right.png`} className='tight' /> <Image alt='' src={`${prefix}/dot4.png`} /> <Image alt='' src={`${prefix}/dot5.png`} /> <Image alt='' src={`${prefix}/dot6.png`} />
                &nbsp;
              </div>
              <a href='mailto:janaxpachamusica@gmail.com' target="_blank">janaxpachamusica@gmail.com</a>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  )
}