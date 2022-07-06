import Footer from './Footer'   
import Sidebar from './Sidebar'
import Leafs from './Leafs'
import {useState, useEffect} from 'react'


const Layout = ({ children }) => {
   


    return(
<div id='App'>

<Sidebar 
width={"100%"} 
right 
pageWrapId={"page-wrap"} 
outerContainerId={"App"} 
/>

<Leafs/>
  {children}  
<Footer/>
</div>
    )
  }

export default Layout;