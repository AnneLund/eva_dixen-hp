import Footer from './Footer'   
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return(
<div id='App'>
<Sidebar right pageWrapId={"page-wrap"} outerContainerId={"App"}/>
  {children}  
<Footer/>
</div>
    )
}

export default Layout;