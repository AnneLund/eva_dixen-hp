import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'

const Privacy = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
 
    useEffect(() => {
      setLoading(true)
      fetch('https://database.evadixen.dk/wp-json/wp/v2/posts')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
      
        })
     
    }, [])
  
    if (isLoading) return 
    if (!data) return 
  console.log(data[0])
    return(

<section className={styles.main}>
    <h1>Persondata-politik</h1>
    <article styles={styles.main}>
     {data[0].yoast_head_json.og_description}
     </article>
</section>
    )
}


export default Privacy;