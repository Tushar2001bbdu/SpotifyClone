import React,{useEffect,useState,useRef,useContext} from 'react'
import Sidebar from './Sidebar'
import Navbar from '../Components/Navbar'
import Footer from './Footer'
import Body from './Body'
import NodeState from '../Context/nodeContext'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SearchResults from './SearchResults'
import Home from './Home'
import RecentlyPlayed from './RecentlyPlayed'
import Recommend from './Recommend'
import FavouriteArtists from './FavouriteArtists'
import ArtistsTopTracks from './ArtistsTopTracks'
import PlaylistsList from './PlaylistsList'


export default function Spotify(props) {
  const con=useContext(NodeState)
  const[name,setName]=useState(null)
  const[userId,setUserId]=useState(null)
  const[datai,setData]=useState(null)
  let token=localStorage.getItem('token')
  const scroll = useRef(0);
  const co=useContext(NodeState)
  const[navbag,setnav]=useState(null)
  useEffect(()=>{
  const getUserInfo=async()=>{
    const data=await fetch("https://api.spotify.com/v1/me",{
      headers:{Authorization:'Bearer '+localStorage.getItem('token'),'Content-Type':"application/json"}
    })
    const data2=await data.json()
    
    setData(data2)

    

  
  }
  getUserInfo();

  

  
 
  

  },[])
  return (
    <>
    <div className="container" style={{padding:"0%"}}>
<div className='container' style={{marginLeft:"0%",height:"80%",width:"100%",background: "linear-gradient(to bottom, #008B8B, #2F4F4F)",display:"flex",flexDirection:"row",padding:"0%"}}>
      <div className="spotify" style={{display:"flex",alignSelf:"flex-start",width:"20%"}}>
        <Sidebar style={{height:"100em"}}/>
        </div>
        <div className="body" style={{width:"88%",marginLeft:"0%"}}>{datai!=null && <Navbar name={datai.display_name} style={{height:"30%"}}/>}
     
      
        {<div className="body_contents">
          
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="recply" element={<RecentlyPlayed />} />
          <Route path="recommend" element={<Recommend/>} />
          <Route path="favArt" element={<FavouriteArtists/>} />
          <Route path="toptracks" element={<ArtistsTopTracks/>} />
          <Route path="content" element={<Body/>} />
          <Route path="list" element={<PlaylistsList/>} />
          <Route path="data" element={<Body/>} />
          <Route path="playlists" element={con.id!=null &&
            <Body style={{"marginTop":"2vh",height:"60vh"}} />} />
          </Routes>
          
          
              </div>} 
         
        
   
            
        </div>
      
        </div>
        <footer className="spotify_footer container" style={{marginLeft:"0%",padding:"0%"}}>
    
       <Footer/>
      </footer>
      
      
    </div>
    <div className="container">
    
    </div>
    </>
    
    
  )
}
