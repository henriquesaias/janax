import React from 'react'
import { prefix } from '../utils/prefix.js'
import { Image } from 'semantic-ui-react'

export default function Experience({ section }) {
  return (
    <section id="experience">
      <div className='title-container'>
        <h2>Experience</h2>
        <div className={`py3 hidden-mobile ${section === 'experience' ? 'animate-into-view' : 'animate-out-of-view'}`}>
          <p>My Live set is a pure improvised experience where I merge tribal & ethnic instruments with electronic sounds and chants.</p>

          <p>Dive into these journeys with me...</p>

          <p>CLICK BELOW</p>

          <div className='soundcloud-arrows'>
            <Image alt='' src={`${prefix}/vector arrow 1.png`} />
            <Image alt='' src={`${prefix}/vector arrow 2.png`} />
          </div>
        </div>

        <div className='py2 mobile-only'>
          <p>My Live set is a pure improvised experience where I merge tribal & ethnic instruments with electronic sounds and chants.</p>

          <p>Click below to dive into these journeys with me...</p>

          <div className='soundcloud-arrows'>
            <Image alt='' src={`${prefix}/vector arrow 1.png`} />
            <Image alt='' src={`${prefix}/vector arrow 2.png`} />
          </div>
        </div>
      </div>
      <div className="soundcloud-playlist">
        <iframe width="100%" height="320" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1260178069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe>
      </div>
    </section>
  )
}