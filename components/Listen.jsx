import React from 'react'
import { prefix } from '../utils/prefix.js'
import { Button, Icon, Image } from 'semantic-ui-react'

export default function Listen() {
  return (
    <section id="listen">
      <div className="title-container">
        <h2>Listen</h2>
        <p>Latest Singles, EPs & Albums</p>
      </div>
      <div className="spotify-playlist">
        <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/artist/3BHXRZv18jHRR8RDuSq9gK?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div id="shop-container">
        <br /><br />
        <Image src={`${prefix}/listen symbol.png`} className='mb2 listen-symbol' centered size='tiny' />
        <p className='flex-center' style={{ position: 'relative' }}>
          <span className='mobile-only' style={{ fontSize: 20 }}>Unreleased Songs <br />& Live Sets</span>
          <span className='hidden-mobile'>Unreleased Songs & Live Sets</span>
        </p>
        <a href="https://janaxpacha.bandcamp.com/" target="_blank" rel="noreferrer noopener">
          <Button className='shop-music-button'>

            <img src={`${prefix}/losangle.png`} style={{ filter: 'brightness(10)', transform: 'translateY(4px)', marginRight: '.5em' }} />
            &nbsp;Shop my Music
            <img src={`${prefix}/losangle.png`} style={{ filter: 'brightness(10)', transform: 'translateY(4px)', marginLeft: '.6em' }} />
            <div className='animate-icon'>
              <Icon fitted name='bandcamp' size='large' />
            </div>

          </Button>
        </a>
      </div>
    </section>
  )
}