import '../styles/globals.scss'
import '../styles/Home.module.scss'
import '../styles/leafs.scss'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import { useState, useEffect } from 'react';


function MyApp({ Component, pageProps }) {


  return (
    <Layout>
   
     <Component {...pageProps} />     
    
    </Layout>
  )
}

export default MyApp
