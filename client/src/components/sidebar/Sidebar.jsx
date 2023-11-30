import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {

const [cats,setCats]=useState([])

useEffect(()=>{
  const getCats=async()=>{
    const res=await axios.get('http://localhost:5000/api/categories')
    setCats(res.data)
  }
  getCats()
},[])

  return (
    <div className='sidebar'>
       <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src='https://i.pinimg.com/originals/3f/64/2b/3f642bc91faf612bbb14dcfd48e82167.jpg' alt='' />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Aut, providen t laudantium facere ratione placeat  
          </p>
       </div>
       <div className="sidebarItem">
         <span className="sidebarTitle">CATEGORIES</span>
         <ul className="sidebarList">
          {cats.map((c)=>(
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
         </ul>
       </div>
       <div className="sidebarItem">
         <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarsocial">
           <i className="sidebarIcon fa-brands fa-square-facebook"></i>
           <i className="sidebarIcon fa-brands fa-square-twitter"></i>
           <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
           <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
         </div>
         </div>
    </div>
  )
}
