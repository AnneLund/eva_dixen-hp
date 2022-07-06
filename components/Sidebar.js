import React from "react";
import { slide as Menu } from "react-burger-menu";
import {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Sidebar = (props) => {
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

  if (isLoading) return 
  if (!data) return 

 
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const isMenuOpen = function(state) {
    console.log(state.isOpen)
    return state.isOpen;
  };

  return (
    <>
   <Menu 
   onStateChange={isMenuOpen}
   isOpen={isMenuOpen}
    {...props} >
 
      <nav>

        <ul>
         
    <li className="menu-item">
        <Link   href="/">
      <a onClick = {()=>handleCloseMenu} title="home" >Forside</a> 
      </Link>  
    </li>   
          

  
    <li className="menu-item">
      <Link href="/about">
        <a title="about">{data.items[0].title}</a>
    
      </Link>
    </li>

    <li className="menu-item">
      <Link href="/latest">
    {data.items[1].title}
      </Link>
    </li>

    <li className="menu-item">
      <Link href="/practices">
   {data.items[2].title}
      </Link>
</li>

<li className="menu-item">
      <Link  href="/contact">
     {data.items[3].title}
      </Link>
</li>
</ul>

</nav>

    </Menu>
    </> 
    );
};

export default Sidebar;
