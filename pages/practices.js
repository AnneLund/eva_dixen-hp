import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'

const Practices = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
 
    useEffect(() => {
      setLoading(true)
      fetch('http://localhost/wordpress/eva-dixen/wp-json/wp/v2/pages/24')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
      
        })
     
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return(

<section className={styles.main}>
    <h1>Foredrag</h1>
    <div>
        {data.yoast_head_json.og_description}
    </div>
</section>
    )
}


export default Practices;