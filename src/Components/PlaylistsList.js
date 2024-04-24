import React,{useContext,useEffect,useState} from 'react'
import NodeState from '../Context/nodeContext'
import { BsPlayCircleFill, BsPlusCircleFill } from 'react-icons/bs';

import Body from './Body';
import { Link ,Routes, Route } from 'react-router-dom';
import { faBullseye, faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import AddPlaylist from './AddPlaylist';



export default function PlaylistsList() {
    
    const con=useContext(NodeState)
  
   const[name,setName]=useState(null)
  const[description,setDescription]=useState(null)
  const[scope,setScope]=useState(null)
    
   return (
  
    
    <div className="data container text-light" style={{marginLeft:"0%"}}>
     <Routes>
      <Route path="data" element={<Body/>}/>
      </Routes>
     
 <h4>My Playlists</h4><div className="container"> 
      <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add a Playlist
      </button>
      
     
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">Add a Playlist</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <input type="text" style={{border:"1% solid black"}} value={name} class="form-control" onChange={(e)=>{setName(e.target.value)}} placeholder='Enter the name'/>
       
        
            </div>
            <div className="modal-body">
            <input type="text" style={{border:"1% solid black"}}  value={description} class="form-control" onChange={(e)=>{setDescription(e.target.value)}} placeholder='Enter the description'/>
            </div>
            <div className="modal-body">
            <input type="text" style={{border:"1% solid black"}}  value={scope} class="form-control" onChange={(e)=>{setScope(e.target.value)}} placeholder='Enter the scope'/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={()=>{con.addPlaylist(con.pD.items[0].owner.id,name,description,scope)}} data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div></div>
 
      {con.pD!=null &&
        con.pD.items.map((element, index) => {
          return(
         <div className="row">
         <div className="col" style={{width:"50%"}}>
          {element.images!=null && <img src={element.images[0].url} alt="" style={{height:"70%",width:"70%"}}/> }
          {element.images==null && <div className='container my-3'>There are currently no items click the play icon to add items in playlist</div>}

         </div>
         <div className="col link" style={{width:"30%"}} >
         {element.name} 
         </div>
         <div className="col" style={{width:"20%"}}>
          <Link to="content" style={{color:"white"}}>
          <BsPlayCircleFill style={{width:"25%",height:"25%"}}  onClick={()=>{con.setId(element.id,element.snap_id,element.uri)}}/>
          </Link>
          
          
          
          
         
         </div>
         
         </div>)
        
          
        })}
     
    </div>
   
   
  );
      
     
    
   } 
  
   
  
   

