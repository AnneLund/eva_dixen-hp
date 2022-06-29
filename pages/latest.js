import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'

const About = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
 
    useEffect(() => {
      setLoading(true)
      fetch('https://database.evadixen.dk/wp-json/wp/v2/pages/96')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
      
        })
     
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    console.log(data)    
    return(

<section className={styles.main}>
    <h1>Udgivelser</h1>
    <div>
        {data.yoast_head_json.og_description}
    </div>
</section>
    )
}


export default About;