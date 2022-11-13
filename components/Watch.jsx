import React from 'react'
import { prefix } from '../utils/prefix.js'
import Flicking from "@egjs/react-flicking";
import { Button, Embed, Grid, Modal, Image } from 'semantic-ui-react'

export default function Watch() {
  const [open, setOpen] = React.useState('')  

  const watch = [
    {
      thumb: `${prefix}/watch/yoga sunrise.png`,
      id: 'eGuvf25VVOk'
    },
    {
      thumb: `${prefix}/watch/caravana.png`,
      id: 'LVbxNveLkwQ'
    },
    {
      thumb: `${prefix}/watch/mose.png`,
      id: 'G1Xayi4eHiY'
    },
    {
      thumb: `${prefix}/watch/tierra adentro.png`,
      id: 'mvty2Scdn5U'
    },
    {
      thumb: ``,
      id: ''
    },
    {
      thumb: `${prefix}/watch/into nature.png`,
      id: 'zPAZTPVDUo4'
    }
  ]

  return (
    <section id="watch">
      <div className="title-container">
        <h2>Watch</h2>
        <p className='mobile-only'>Fly with me<br />into the jungle</p>
      </div>
      <Grid padded relaxed='very' centered className='hidden-mobile'>
        <Grid.Row columns={3} verticalAlign='middle'>
          {watch.map((vid, i) =>
            <Grid.Column textAlign='center' style={{ marginTop: '2.5em' }} key={vid.id}>
              {
                i === 4
                  ? <a target='_blank' href='https://www.youtube.com/c/JanaxPacha' rel='noreferrer noopener'><Button>Watch More</Button></a>
                  : <Modal
                    dimmer='blurring'
                    closeIcon
                    open={open === vid.id}
                    trigger={<Image style={{ borderRadius: 4 }} src={vid.thumb} className='cursor-pointer' />}
                    onClose={() => setOpen('')}
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
        <div className='p5-2'>
          <Flicking
            circular={true}
            panelsPerView={1}
          >
            {watch.map((vid, i) =>
              i !== 4 && <div key={vid.id}>
                <Modal
                  dimmer='blurring'
                  closeIcon
                  open={open === vid.id}
                  trigger={<Image src={vid.thumb} alt="youtube video" />}
                  onClose={() => setOpen('')}
                  onOpen={() => setOpen(vid.id)}
                >
                  <Embed
                    id={vid.id}
                    source='youtube'
                    active
                  />
                </Modal>
              </div>
            )}
          </Flicking>
        </div>
        <div id="watch-more">
          <a target='_blank' href='https://www.youtube.com/c/JanaxPacha'>
            <Button>Watch More</Button>
          </a>
        </div>
      </div>
    </section>
  )
}