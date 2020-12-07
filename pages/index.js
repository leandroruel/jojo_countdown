import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <main className={styles.main}>
          <h1 className={styles['coming-soon']}>Something great is coming...</h1>
          <p className={styles.copyright}>© 2020 荒木飛呂彦 & LUCKY LAND COMMUNICATIONS / 集英社・ジョジョの奇妙な冒険</p>
        </main>
    </>
  )
}
