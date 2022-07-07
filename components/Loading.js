import styles from '../styles/Home.module.scss'
import Image from 'next/image'

const Loading = () => {
    return(
        <section className={styles.main}>
            <Image src="/leaf4.png" width={100} height={100}/>
        </section>
    )
}

export default Loading;