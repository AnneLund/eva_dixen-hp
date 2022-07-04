import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <>
     
      <Head>
        <title>Eva Dixen</title>
        <meta name="description" content="Forfatter og foredragsholder Eva Dixen" />
        <link rel="icon" href="/logochi.png" />
      </Head>
      <section className={styles.main}>
        <h1>Eva Dixen</h1>
      </section>
    </>
  )
}
