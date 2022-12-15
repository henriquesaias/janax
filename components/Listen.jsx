import React from 'react'
import { prefix } from '../utils/prefix.js'
import { Button, Icon, Image } from 'semantic-ui-react'

export default function Listen() {
  return (
    <section id="listen">
      <div className="title-container">
        <h2>Listen</h2>
        <p>I share with you my latest Singles, EPs & Albums</p>
      </div>
      <div className="spotify-playlist">
        <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/artist/3BHXRZv18jHRR8RDuSq9gK?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div id="shop-container">
        <br /><br />
        <Image src={`${prefix}/listen symbol.png`} className='mb3' centered size='tiny' />
        <p className='flex-center' style={{ marginBottom: '2rem' }}>
          <img src={`${prefix}/losangle.png`} />&nbsp; Find the Unreleased Songs & Full Sets&nbsp; <img src={`${prefix}/losangle.png`} />
        </p>
        <a href="https://janaxpacha.bandcamp.com/" target="_blank" rel="noreferrer noopener">
          <Button>
            &bull; Shop my Music &bull;<br />
            <Icon fitted name='bandcamp' size='large' />
          </Button>
        </a>
      </div>
    </section>
  )
}