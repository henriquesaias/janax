import { prefix } from '../components/prefix.js';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button, Icon, Grid, Image } from 'semantic-ui-react'

export default function Home() {
  const router = useRouter()
  document.documentElement.style.setProperty('--prefix', prefix);

  return (
    <div>
      <Head>
        <title>Janax Pacha</title>
        <meta name="description" content="The Land of Heaven" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="splash" className='full-page'>
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

                <Image src={`${prefix}/down triangles.png`} centered style={{opacity: .6}} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </section>

        <section id="listen">
          <div className="title-container">
            <h2>Listen</h2>
            <p>Fly with me lorem ipsum dolor sit amet</p>
          </div>
          <div className="embed">
            <iframe style={{borderRadius: 12}} src="https://open.spotify.com/embed/artist/3BHXRZv18jHRR8RDuSq9gK?utm_source=generator&theme=1" width="100%" height="305" frameBorder="0" allowFullScreen="" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div id="shop-container">
            <Button><Icon name='bandcamp' />Shop my Music</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
