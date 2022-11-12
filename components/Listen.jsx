import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default function Listen() {
  return (
    <section id="listen">
      <div className="title-container">
        <h2>Listen</h2>
        <p>I share with you my latest Singles, EPs & Albums</p>
      </div>
      <div className="spotify-playlist">
        <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/artist/3BHXRZv18jHRR8RDuSq9gK?utm_source=generator&theme=1" width="100%" height="305" frameBorder="0" allowFullScreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div id="shop-container">
        <p>Find the unreleased & Full Sets</p>
        <a href="https://janaxpacha.bandcamp.com/" target="_blank" rel="noreferrer noopener">
          <Button><Icon name='bandcamp' />Shop my Music</Button>
        </a>
      </div>
    </section>
  )
}