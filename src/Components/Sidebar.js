import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free"
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { MdOutlineLibraryMusic } from 'react-icons/md'
import { BiHome } from 'react-icons/bi'
import { Outlet, Link } from "react-router-dom";


export default function Sidebar() {
  function color(){
    document.getElementsByClassName("link").color="white"
  }
  return (
    <div className='container' style={{backgroundColor:"black",flexGrow: 1,paddingBottom:"100%",width:"100%",alignSelf:"left",display:"block",height:"100%"}}>
    <div className="top_links" style={{display:"flex",flexDirection:"column",gap:"2%",color:"white",fontFamily:"sans-serif"}}>
      <div className="logo text-center">
      <img src="https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png" alt="spotify" style={{height:"10vh",width:"10vw"}}/> 
      </div>
      <div className="link my-3" onMouseOver={color}>
      <BiHome style={{marginRight:"5%",color:'white',textDecoration:'none'}}/><Link  className="link"style={{color:'white',textDecoration:'none'}} to="home">Home</Link> 
      </div>
      
      <div className="link my-3" onMouseOver={color}>
       <MdOutlineLibraryMusic style={{marginRight:"5%",color:'white',textDecoration:'none'}} /><Link  className="link" style={{color:'white',textDecoration:'none'}} to="list">Your Libary</Link>
      </div>
     
    </div>
    </div>
  )
}
