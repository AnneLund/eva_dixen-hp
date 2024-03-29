import '../styles/globals.scss'
import '../styles/Home.module.scss'
import '../styles/leafs.scss'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
     <Component {...pageProps} />     
    </Layout>
  )
}

export default MyApp;
