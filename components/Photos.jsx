import React from 'react'
import { prefix } from '../utils/prefix.js'
import Flicking from "@egjs/react-flicking";
import { Perspective } from "@egjs/flicking-plugins";
import { Button, Image } from 'semantic-ui-react'

export default function Photos() {
  const photos = [1, 2, 3, 4]
  const perspective = [new Perspective({ rotate: 0.5, perspective: 600 })]

  return (
    <section id="photos">
      <div className="title-container">
        <h2>Photos</h2>
        {/* <p>HI - FI</p> */}
      </div>

      <Flicking
        align='center'
        panelsPerView={3}
        circular={true}
        plugins={perspective}
      >
        {photos.map((photo) =>
          <div key={photo}>
            <Image src={`${prefix}/FOTOS/${photo}.jpg`} style={{ maxHeight: '50vh' }} verticalAlign='middle' alt={photo} />
          </div>
        )}
      </Flicking>

      <div id="download-photos">
        <a href="https://drive.google.com/drive/folders/1YR9dXe6xwinw5lnzUd74rjVNUBB_GEdn?usp=share_link" target="_blank">
          <Button>Download high quality</Button>
        </a>
      </div>
    </section>
  )
}