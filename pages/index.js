import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button, Grid, Image } from 'semantic-ui-react'

export default function Home() {
  const router = useRouter()

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
            <Image ui={false} src="/logo janax.png" className='ml-1' />
            <Image ui={false} src="/logo pacha.png" className='ml1' />
          </div>
          <div id="splash-nav">
            <Button onClick={() => router.push('#listen')}>Listen</Button>
            <Button onClick={() => router.push('#watch')}>Watch</Button>
            <Button onClick={() => router.push('#experience')}>Experience</Button>
          </div>
          <div id="splash-arrows">
            <Image src="/down arrow.png" />
            <Image src="/down arrow.png" />
          </div>
        </section>

        <section id="quote-container">
          <div id="hanaq-quote">
            <p>In the Native tribes from the Andes, <br />the Quechua people call “Hanaq Pacha” the Land of Heaven.</p>
          </div>
        </section>

        <section className='hidden-mobile'>
          <Image src='/home pic cropped.png' />
        </section>

        <section id="about-me">
          <Grid padded='horizontally'>
            <Grid.Row>
              <Grid.Column mobile={0} computer={8}></Grid.Column>
              <Grid.Column mobile={16} computer={7}>
                <h2>About me</h2>

                <div className='icons-container'>
                  <Image src='/dot.png' /> <Image src='/dot2.png' /> <Image src='/dot3.png' /> <Image src='/arrow right.png' /> <Image src='/arrow right.png' /> <Image src='/arrow right.png' /> <Image src='/dot4.png' /> <Image src='/dot5.png' /> <Image src='/dot6.png' />
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

                <Image src="/down triangles.png" centered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </section>
      </main>
    </div>
  )
}
