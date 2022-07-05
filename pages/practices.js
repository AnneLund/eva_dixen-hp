import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'

const Practices = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
 
    useEffect(() => {
      setLoading(true)
      fetch('https://database.evadixen.dk/wp-json/wp/v2/pages/14')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
      
        })
     
    }, [])
  
if (isLoading) return 
  if (!data) return
   
    return(

<section className={styles.main}>
    <h1>Foredrag</h1>
    <article styles={styles.main}>
        {data.yoast_head_json.og_description}
    </article>
</section>
    )
}


export default Practices;