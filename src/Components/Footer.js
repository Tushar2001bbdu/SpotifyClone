import React from 'react'
import CurrentTrack from './CurrentTrack'
import PlayerControls from './PlayerControls'


export default function Footer() {
  
  return (
    <div className='container row' style={{backgroundColor:"black",height:"19%",width:"100vw",marginLeft:"0px"}}>
    <div className="col" style={{width:"30%"}}>
    <CurrentTrack/>
    </div>
    <div className="col" style={{width:"50%"}}>
     <PlayerControls/>
    </div>
    <div className="col" style={{width:"20%"}}>
     
    </div>
    </div>
  )
}
