import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'

const Header = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
 
    useEffect(() => {
      setLoading(true)
      fetch('https://database.evadixen.dk/wp-json/menus/v1/menus/main')
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

<header className={styles.header}>
    <nav className={styles.nav}>


        <ul>
            <Link href="/">Forside</Link>
            <Link href="./about">Her er{data.items[0].title}</Link>
            <Link href="./latest">{data.items[1].title}</Link>
            <Link href="./practices">{data.items[2].title}</Link>
            <Link href="./contact">{data.items[3].title}</Link>

</ul>
</nav>
</header>
    )
}

export default Header;

