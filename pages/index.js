import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eva Dixen</title>
        <meta name="description" content="Forfatter og foredragsholder Eva Dixen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}
