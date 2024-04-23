import React,{useContext,useEffect,useState} from 'react'
import NodeState from '../Context/nodeContext'
import { BsPlayCircleFill } from 'react-icons/bs';
import Body from './Body';
import { Link } from 'react-router-dom';



export default function PlaylistsList() {
    
    const con=useContext(NodeState)
    function data(id){
        return(<Body id={id}/>)
    }
    
    
  
   
  
    return (
  
    
      <div className="data container text-light" style={{marginLeft:"0%"}}>
          
   <h4>My Playlists</h4>
        {con.pD!=null &&
          con.pD.items.map((element, index) => {
            return(
           <div className="row">
           <div className="col" style={{width:"50%"}}>
<img src={element.images[0].url} alt="" style={{height:"70%",width:"70%"}}/>
           </div>
           <div className="col" style={{width:"30%"}}>
           {element.name} 
           </div>
           <div className="col" style={{width:"20%"}}>
            <Link  to="data">
            <BsPlayCircleFill style={{width:"25%",height:"25%"}} onClick={()=>{con.setId(element.id,element.snap_id)}}/>
            </Link>
           
           </div>
           </div>)
            
          })}
      
      </div>
     
    );}

