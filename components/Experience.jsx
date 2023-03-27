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
            `hidden-mobile ${section === 'experience'
              ? 'animate-into-view'
              : triggered
                ? 'animate-into-view'
                : 'animate-out-of-view'
            }`
          }
        >
          <p style={{marginBottom: '1em'}}>"The power and the medicine I can share with you<br />is through Sound, Vibration & Frequency"</p>
          <Image alt='' src={`${prefix}/icon-verde.png`} width={64} centered style={{filter: 'opacity(.5)'}} />
          <p style={{margin: '1em 0 0 0', fontStyle: 'italic', filter: 'opacity(.75)'}}>These journeys will guide you To a Higher State,<br />to Janax Pacha “The land of Heaven”</p>

          <div className='soundcloud-arrows updownRel'>
            <Image alt='' src={`${prefix}/vector arrow 1.png`} />
            <Image alt='' src={`${prefix}/vector arrow 2.png`} />
          </div>
        </div>

        <div className='mobile-only'>
          <p>"The power & the Medicine I can share with you is through Sound, Vibration & Frequency"</p>
          <Image alt='' src={`${prefix}/icon-verde.png`} width={64} centered style={{filter: 'opacity(.5)'}} />
          <p style={{fontStyle: 'italic', filter: 'opacity(.75)', margin: '1em 0 0 0'}}>These journeys will guide you to a Higher State, to Janax Pacha “The Land of Heaven”</p>

          <div className='soundcloud-arrows updownRel' style={{marginBottom: -20}}>
            <Image alt='' src={`${prefix}/vector arrow 1.png`} />
            <Image alt='' src={`${prefix}/vector arrow 2.png`} />
          </div>
        </div>
      </div>
      <div className="soundcloud-playlist">
        <iframe width="100%" height="400" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1260178069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"></iframe>
      </div>
    </section>
  )
}