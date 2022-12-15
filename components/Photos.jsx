import React from 'react'
import { prefix } from '../utils/prefix.js'
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, Perspective } from "@egjs/flicking-plugins";
import { Button, Image } from 'semantic-ui-react'
import "@egjs/flicking-plugins/dist/arrow.css";


export default function Photos() {
  const photos = [1, 2, 3, 4, 5, 6, 7]
  const plugins = [new Arrow(), new Perspective({ rotate: 0.5, perspective: 600 })]

  return (
    <section id="photos">
      <div className="title-container">
        <h2>Photos</h2>
        {/* <p>HI - FI</p> */}
      </div>

      <div className='flicking-container'>
        <Flicking
          align='center'
          defaultIndex={1}
          panelsPerView={3}
          circular={true}
          plugins={plugins}
        >
          {photos.map((photo) =>
            <div key={photo}>
              <Image src={`${prefix}/FOTOS/${photo}.jpg`} className='slider-photo' verticalAlign='middle' alt={photo} />
            </div>
          )}
          <ViewportSlot>
            <img src={`${prefix}/left arrow.png`} className="flicking-arrow-prev hidden-mobile" />
            <img src={`${prefix}/right arrow.png`} className="flicking-arrow-next hidden-mobile" />
          </ViewportSlot>
        </Flicking>
      </div>

      <div id="download-photos">
        <a href="https://drive.google.com/drive/folders/1YR9dXe6xwinw5lnzUd74rjVNUBB_GEdn?usp=share_link" target="_blank">
          <Button>
            Download<br />
            High Quality
          </Button>
        </a>
      </div>
    </section>
  )
}