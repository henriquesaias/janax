import React from 'react'
import { Icon } from 'semantic-ui-react'
import Player from './Player'

export default function TopMenu({ setMenuOpen, section }) {
  return (
    <>
      <div id="anchor-tags">
        <a href='#about-me' className={section === 'about-me' ? 'in-view' : ''} onClick={() => setMenuOpen(false)}>About Me</a>
        <a href='#listen' className={section === 'listen' ? 'in-view' : ''} onClick={() => setMenuOpen(false)}>Listen</a>
        <a href='#watch' className={section === 'watch' ? 'in-view' : ''} onClick={() => setMenuOpen(false)}>Watch</a>
        <a href='#experience' className={section === 'experience' ? 'in-view' : ''} onClick={() => setMenuOpen(false)}>Experience</a>
        <a href='#photos' className={section === 'photos' ? 'in-view' : ''} onClick={() => setMenuOpen(false)}>Photos</a>
        <a href='#connect' className={section === 'connect' ? 'in-view' : ''} onClick={() => setMenuOpen(false)}>Connect</a>
      </div>

      <span className='hidden-mobile'>
      <Player />
      </span>

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