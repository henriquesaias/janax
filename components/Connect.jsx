import React from 'react'
import { prefix } from '../utils/prefix.js'
import { Button, Grid, Icon, Image } from 'semantic-ui-react'

export default function Connect() {
  return (
    <section id="connect" className='full-page'>
      <Grid container centered padded='horizontally'>
        <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>Connect</h2>
        <Grid.Row>
          <Grid.Column computer={4}></Grid.Column>
          <Grid.Column mobile={16} computer={12}>
            <div id='connect-contacts' style={{ marginTop: '1.5em' }}>
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
        <h4>Support my Art</h4>

        <div className='soundcloud-arrows connect-arrows updownRel'>
          <Image alt='' src={`${prefix}/vector arrow 1.png`} />
          <Image alt='' src={`${prefix}/vector arrow 2.png`} />
        </div>

        <div style={{ textAlign: 'center', marginTop: '-3em' }}>
          <a href='https://paypal.me/janaxpachamusica' target="_blank">
            <Button circular basic className='paypal-btn'><Icon circular size='huge' name='paypal' fitted /></Button>
          </a>
        </div>
      </Grid>
    </section>
  )
}