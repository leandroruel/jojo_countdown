import Head from 'next/head'
import Counter from 'components/counter'
import Copyright from 'components/copyright'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jojo Countdown</title>
        <link rel="icon" href="/favicon-32x-32.png" />
      </Head>
      <main className="flex flex-col justify-center items-center h-screen">
        <Counter />
        <Copyright />
      </main>
    </>
  )
}
