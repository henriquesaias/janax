import React, { useEffect, useRef, useState } from 'react'

export default function Player({ }) {
  const [played, setPlayed] = useState(false)

  return (
    <>
      {/* <input type="range" value={volume} onChange={(e) => setVolume(e.target.value)} min={0} max={1} step={0.01} /> */}

      <audio
        autoplay
        loop
        id='player'
        onPlay={() =>
          setPlayed(true)}
        controls
        controlsList='nodownload noplaybackrate'
        className={played ? 'played' : ''}
      >
        <source src="/web music.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}