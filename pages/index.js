import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import Image from 'next/image'
import Layout from './../components/Layout';

export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://database.evadixen.dk/wp-json/wp/v2/pages/6')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
   
  }, [])

if (isLoading) return <Loading/>
if (!data) return 
console.log(data)
  return (
    <>
      <Head>
        <title>Eva Dixen</title>
        <meta name="description" content="Forfatter og foredragsholder Eva Dixen" />
        <link rel="icon" href="/logochi.png" />
      </Head>
      <article className={styles.main}>
        <h1>{data.title.rendered}</h1>
<Image src="/eva.jpg" 
width={200} 
height={200}
/>

      </article>
    </>
  )
}
