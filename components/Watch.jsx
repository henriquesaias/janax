import React from 'react'
import Script from 'next/script'
import { prefix } from '../utils/prefix.js'
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import { Button, Embed, Grid, Modal, Image } from 'semantic-ui-react'

export default function Watch() {
  const [open, setOpen] = React.useState('')
  const [show, setShow] = React.useState(false)
  const plugins = [new Arrow()]

  const watch = [
    { id: 'eGuvf25VVOk' },
    { id: 'F36Ws9TpVts' },
    { id: 'G1Xayi4eHiY' },
    { id: 'mvty2Scdn5U' },
    { id: '' },
    { id: 'zPAZTPVDUo4' }
  ]

  const handleClickVideo = () => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
    setTimeout(() => {
      setShow(false)
    }, 20000)
  }


  return (
    <section id="watch">
      <Script src="https://apis.google.com/js/platform.js" />
      <div className="title-container">
        <h2>Watch</h2>
        <p><span className='painted-spread'>"How the Magic Happens"</span></p>
      </div>
      <Grid padded relaxed='very' centered className='hidden-mobile'>
        <Grid.Row columns={3} verticalAlign='middle'>
          {watch.map((vid, i) =>
            <Grid.Column textAlign='center' style={{ marginTop: '2.5em' }} key={vid.id}>
              {
                i === 4
                  ? <a
                    target='_blank'
                    href='https://www.youtube.com/c/JanaxPacha'
                    rel='noreferrer noopener'
                  >
                    <Button>
                      Watch More
                    </Button>
                  </a>
                  : <Modal
                    dimmer='blurring'
                    closeIcon
                    open={open === vid.id}
                    trigger={
                      <Image
                        alt='Youtube video thumbnail'
                        style={{ borderRadius: 4 }}
                        src={`https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`}
                        className='cursor-pointer thumbnail-container'
                      />
                    }
                    onClose={() => { setOpen(''); handleClickVideo() }}
                    onOpen={() => setOpen(vid.id)}
                  >
                    <Embed
                      id={vid.id}
                      source='youtube'
                      active
                    />
                  </Modal>
              }
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
      <div className='mobile-only'>
        <div style={{ padding: '1em' }}>
          <Image
            alt='Youtube video thumbnail'
            style={{ borderRadius: 4 }}
            src={`https://img.youtube.com/vi/eGuvf25VVOk/maxresdefault.jpg`}
            className='cursor-pointer thumbnail-container'
          />
          <Image
            alt='Youtube video thumbnail'
            style={{ borderRadius: 4, margin: '1.5em 0' }}
            src={`https://img.youtube.com/vi/F36Ws9TpVts/maxresdefault.jpg`}
            className='cursor-pointer thumbnail-container'
          />
          <Image
            alt='Youtube video thumbnail'
            style={{ borderRadius: 4 }}
            src={`https://img.youtube.com/vi/zPAZTPVDUo4/maxresdefault.jpg`}
            className='cursor-pointer thumbnail-container'
          />
          {/* 
            TODO arrow as play button that onClick goes to youtube
              <img src={`${prefix}/left arrow.png`} className="flicking-arrow-prev" />
               */}
        </div>
        <div id="watch-more">
          <a
            target='_blank'
            href='https://www.youtube.com/c/JanaxPacha'
          >
            <Button>
              Watch More
            </Button>
          </a>
        </div>
      </div>
      <div className={show ? 'animate-into-view popup-animate' : 'animate-out-of-view popup-animate'}>
        <Image
          alt=''
          onClick={() => setShow(false)}
          style={{
            paddingTop: 3,
            paddingRight: 10,
            float: 'right'
          }}
          src={`${prefix}/close.png`}
          className='cursor-pointer'
        />
        <Grid stackable>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column computer={4}>
              <div className="g-ytsubscribe" data-channelid="UCI4O_M7qaQFrWRmTF3D7uPg" data-layout="full" data-count="default"></div>
            </Grid.Column>
            <Grid.Column computer={12}>
              <h3 className='consider-subscribing'>Consider subscribing to my youtube channel</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </section>
  )
}