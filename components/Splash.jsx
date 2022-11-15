import React from 'react'
import { useRouter } from 'next/router'
import { prefix } from '../utils/prefix.js'
import { Button, Image } from 'semantic-ui-react'

export default function Splash() {
  const router = useRouter()

  return (
    <section id="splash" className='full-page flex'>
      <div id="logo-container" className='responsive'>
        <Image alt='Janax' ui={false} src={`${prefix}/logo janax.png`} className='ml-1' />
        <Image alt='Pacha' ui={false} src={`${prefix}/logo pacha.png`} className='ml1' />
      </div>
      <div id="splash-nav">
        <Button onClick={() => router.push('#listen')}>Listen</Button>
        <Button onClick={() => router.push('#watch')}>Watch</Button>
        <Button onClick={() => router.push('#experience')}>Experience</Button>
      </div>
      <div id="splash-arrows" onClick={() => router.push('#hanaq-quote')}>
        <Image alt='' src={`${prefix}/down arrow.png`} />
        <Image alt='Scroll down' src={`${prefix}/down arrow.png`} />
      </div>
    </section>)
}