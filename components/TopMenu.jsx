import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function TopMenu({ section }) {
  return (
    <>
      <div id="anchor-tags">
        <a href='#about-me' className={section === 'about-me' ? 'in-view' : ''}>About Me</a>
        <a href='#listen' className={section === 'listen' ? 'in-view' : ''}>Listen</a>
        <a href='#watch' className={section === 'watch' ? 'in-view' : ''}>Watch</a>
        <a href='#experience' className={section === 'experience' ? 'in-view' : ''}>Experience</a>
        <a href='#photos' className={section === 'photos' ? 'in-view' : ''}>Photos</a>
        <a href='#connect' className={section === 'connect' ? 'in-view' : ''}>Connect</a>
      </div>

      <div id="social-icons">
        <a href='https://open.spotify.com/artist/3BHXRZv18jHRR8RDuSq9gK' target="_blank" rel="noreferrer noopener">
          <Icon name='spotify' />
        </a>
        <a href='https://soundcloud.com/janaxpachax' target="_blank" rel="noreferrer noopener">
          <Icon name='soundcloud' />
        </a>
        <a href='https://www.youtube.com/c/JanaxPacha' target="_blank" rel="noreferrer noopener">
          <Icon name='youtube' />
        </a>
        <a href='https://instagram.com/janaxpachax' target="_blank" rel="noreferrer noopener">
          <Icon name='instagram' />
        </a>
        <a href='https://www.facebook.com/janaxpachax' target="_blank" rel="noreferrer noopener">
          <Icon name='facebook' />
        </a>
      </div>
    </>
  )
}