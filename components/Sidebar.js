import React from "react";
import { slide as Menu } from "react-burger-menu";
import {useState, useEffect} from 'react'
import Link from 'next/link'

export default props => {
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


  return (
    // Pass on our props
    <Menu {...props}>
     
      <Link className="menu-item" href="/">
        Forside
      </Link>

      <Link className="menu-item" href="/about">
      {data.items[0].title}
      </Link>

      <Link className="menu-item" href="/latest">
      {data.items[1].title}
      </Link>

      <Link className="menu-item" href="/practices">
      {data.items[2].title}
      </Link>

      <Link className="menu-item" href="/contact">
      {data.items[3].title}
      </Link>
    </Menu>
  );
};
