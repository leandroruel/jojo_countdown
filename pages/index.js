import Head from 'next/head'
import Event from 'pages/event'
import Copyright from 'components/copyright'
import { events } from 'events.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jojo Countdown</title>
        <link rel="icon" href="/favicon-32x-32.png" />
      </Head>
      <main className="flex flex-col justify-center items-center h-screen">
        <Event events={events} />
      </main>
    </>
  )
}
