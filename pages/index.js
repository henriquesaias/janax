import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button, Image } from 'semantic-ui-react'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Janax Pacha</title>
        <meta name="description" content="The Land of Heaven" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="splash" className='full-page'>
          <div id="logo-container" className='responsive'>
            <Image ui={false} src="/logo janax.png" className='ml-1' />
            <Image ui={false} src="/logo pacha.png" className='ml1' />
          </div>
          <div id="splash-nav">
            <Button>Listen</Button>
            <Button>Watch</Button>
            <Button>Experience</Button>
          </div>
          <div id="splash-arrows">
            <Image src="/down arrow.png" />
            <Image src="/down arrow.png" />
          </div>
        </section>
        <section>
          
        </section>
      </main>
    </div>
  )
}
