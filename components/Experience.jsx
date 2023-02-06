import React from 'react'
import { prefix } from '../utils/prefix.js'
import { Image } from 'semantic-ui-react'

export default function Experience({ section, triggered }) {
  return (
    <section id="experience">
      <div className='title-container'>
        <h2>Experience</h2>
        <div
          className={
            `py3 hidden-mobile ${section === 'experience'
              ? 'animate-into-view'
              : triggered
                ? 'animate-into-view'
                : 'animate-out-of-view'
            }`
          }
        >
          <p>The power and the medicine I can share with you is through Sound, Vibration & Frequency</p>

          <p>These journeys will guide you To a Higher State, to Janax Pacha “The land of Heaven” </p>

          <div className='soundcloud-arrows updownRel'>
            <Image alt='' src={`${prefix}/vector arrow 1.png`} />
            <Image alt='' src={`${prefix}/vector arrow 2.png`} />
          </div>
        </div>

        <div className='py2 mobile-only'>
          <p>The power & the Medicine I can share with you is through Sound, Vibration & Frequency</p>

          <p>These journeys will guide you to a Higher State, to Janax Pacha “The Land of Heaven” </p>

          <div className='soundcloud-arrows updownRel'>
            <Image alt='' src={`${prefix}/vector arrow 1.png`} />
            <Image alt='' src={`${prefix}/vector arrow 2.png`} />
          </div>
        </div>
      </div>
      <div className="soundcloud-playlist">
        <iframe width="100%" height="400" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1260178069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"></iframe>
      </div>
    </section>
    // TODO section separation between experience and photos
  )
}