import React from 'react'
import { prefix } from '../components/prefix.js'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button, Icon, Grid, Image, Modal, Embed, Segment } from 'semantic-ui-react'
import Flicking from "@egjs/react-flicking";
import { Perspective } from "@egjs/flicking-plugins";

export default function Home() {
  const [open, setOpen] = React.useState('')
  const router = useRouter()
  const perspective = [new Perspective({ rotate: 0.5, perspective: 600 })]

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
    <div>
      <Head>
        <title>Janax Pacha</title>
        <meta name="description" content="The Land of Heaven" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="splash" className='full-page flex'>
          <div id="logo-container" className='responsive'>
            <Image ui={false} src={`${prefix}/logo janax.png`} className='ml-1' />
            <Image ui={false} src={`${prefix}/logo pacha.png`} className='ml1' />
          </div>
          <div id="splash-nav">
            <Button onClick={() => router.push('#listen')}>Listen</Button>
            <Button onClick={() => router.push('#watch')}>Watch</Button>
            <Button onClick={() => router.push('#experience')}>Experience</Button>
          </div>
          <div id="splash-arrows">
            <Image src={`${prefix}/down arrow.png`} />
            <Image src={`${prefix}/down arrow.png`} />
          </div>
        </section>

        <section id="quote-container">
          <div id="hanaq-quote">
            <p>In the Native tribes from the Andes, <br />the Quechua people call “Hanaq Pacha” the Land of Heaven.</p>
          </div>
        </section>

        <section id='hidden-img' className='hidden-mobile'>
        </section>

        <section id="about-me">
          <Grid padded='horizontally'>
            <Grid.Row>
              <Grid.Column computer={8}></Grid.Column>
              <Grid.Column mobile={16} computer={7}>
                <h2 className='ml'>About me</h2>

                <div className='icons-container'>
                  <Image src={`${prefix}/dot.png`} /> <Image src={`${prefix}/dot2.png`} /> <Image src={`${prefix}/dot3.png`} /> <Image src={`${prefix}/arrow right.png`} className='tight' /> <Image src={`${prefix}/arrow right.png`} className='tight' /> <Image src={`${prefix}/arrow right.png`} className='tight' /> <Image src={`${prefix}/dot4.png`} /> <Image src={`${prefix}/dot5.png`} /> <Image src={`${prefix}/dot6.png`} />
                </div>

                <div id="about-text">
                  <p>I am Gabriel Epstein, born in Argentina.</p>
                  <p>I am a multi-instrumentalist music producer focused on the fusion of electronic music with ethnic and tribal instruments.</p>
                  <p>My travels through different cultures and the connection with shamanism is fully present and is the essence of my music.</p>
                </div>

                <div id='about-final-quote'>
                  <p>I invite you to discover<br />the beauty of your true Nature.</p>
                  <p>Let sound & vibration take you on this journey..</p>
                </div>

                <Image src={`${prefix}/down triangles.png`} centered style={{ opacity: .6 }} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </section>

        <section id="listen">
          <div className="title-container">
            <h2>Listen</h2>
            <p>I share with you my latest Singles, EPs & Albums</p>
          </div>
          <div className="spotify-playlist">
            <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/artist/3BHXRZv18jHRR8RDuSq9gK?utm_source=generator&theme=1" width="100%" height="305" frameBorder="0" allowFullScreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div id="shop-container">
            <p>Find the unreleased & Full Sets</p>
            <Button><Icon name='bandcamp' />Shop my Music</Button>
          </div>
        </section>

        <section id="watch">
          <h2>Watch</h2>
          <Grid padded relaxed='very' centered className='hidden-mobile'>
            <Grid.Row columns={3} verticalAlign='middle'>
              {watch.map((vid, i) =>
                <Grid.Column textAlign='center' style={{ marginTop: '2.5em' }}>
                  {
                    i === 4
                      ? <a target='_blank' href='https://www.youtube.com/c/JanaxPacha'><Button>Watch More</Button></a>
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
            <div className='py5'>
              <Flicking
                align='center'
                panelsPerView={2}
                circular={true}
                plugins={perspective}
              >
                {watch.map((vid, i) =>
                  i !== 4 && <div>
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
              <a target='_blank' href='https://www.youtube.com/c/JanaxPacha'><Button>Watch More</Button></a>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className='title-container'>
            <h2>Experience</h2>
            <div className='py3'>
              <p>My Live set is a pure improvised experience where I merge tribal & ethnic instruments with electronic sounds and chants.</p>

              <p>Dive into these journeys with me...</p>

              <p>CLICK BELOW</p>

              <div className='soundcloud-arrows'>
                <Image src={`${prefix}/vector arrow 1.png`} />
                <Image src={`${prefix}/vector arrow 2.png`} />
              </div>
            </div>
          </div>
          <div className="soundcloud-playlist">
            <iframe width="100%" height="267" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1260178069&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe>
          </div>
        </section>
      </main>
    </div >
  )
}
