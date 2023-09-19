import React, { useState, useEffect } from 'react'

export default function Player({ }) {
  const [played, setPlayed] = useState(false)
  const [playing, setPlaying] = useState(false)
  const ref = React.useRef(null)

  useEffect(() => {
    !playing && ref.current.pause()

    setInterval(() => {
      const elem = document.activeElement;
      if (elem && elem.tagName == 'IFRAME') {
        // clearInterval(monitor);
        setPlayed(false)
        setPlaying(false)
      }
    }, 1000);
  }, [played, playing])


  return (
    <>
      {/* <input type="range" value={volume} onChange={(e) => setVolume(e.target.value)} min={0} max={1} step={0.01} /> */}

      <audio
        ref={ref}
        autoPlay
        loop
        id='player'
        onPlay={() => {setPlayed(true); setPlaying(true)}}
        controls
        controlsList='nodownload noplaybackrate'
        className={played ? 'played' : ''}
      >
        <source src="/web music.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}