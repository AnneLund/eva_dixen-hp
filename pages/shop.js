import Link from 'next/link'
import styles from '../styles/shop.module.scss'
import {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import BookItem from '../components/Products/Book_item'
import Test_product from '../components/Products/Test_item'

const Shop = () => {
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
  
    if (isLoading) return <Loading/>
    if (!data) return 

    return(

<section >
<h1>Velkommen til webshoppen</h1>
    <article className={styles.shop}>
    <BookItem/>
    <Test_product/>
     </article>
</section>
    )
}


export default Shop;