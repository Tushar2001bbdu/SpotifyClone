import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

import NodeState from './Context/NodeState'

import Login from './Components/login';
import Spotify from './Components/Spotify';
import { BrowserRouter } from 'react-router-dom'


function App() {
  const[ token,setToken]=useState(null);
  useEffect(()=>{
    const hash = window.location.hash
    if(hash){
   const   Token=hash.substring(1).split('&')[0].split('=')[1]
    setToken(Token)
    localStorage.setItem('token',Token)
    }
  },[])
  return (
    
     <div className='container' style= {{padding:"0%"}}>
    <NodeState>
      <BrowserRouter>
      {token!=null ?<Spotify token={token}/>:<Login/>}
      </BrowserRouter>
    
    </NodeState>
    </div>
  
   
    
  );
}

export default App;
