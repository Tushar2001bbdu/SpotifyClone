import React,{useContext} from 'react'
import NodeState from '../Context/nodeContext'
export default function Recommend() {
    const co=useContext(NodeState)
    return (
      
      <div className='container text-light'style={{height:"50%"}}>
        <h3>Recently Played</h3>
        <div className="row" style={{width:"100%"}}>
        {co.recent!=null && co.recent.tracks.map((element,index)=>{
        
        
            return(
                <div class="card" style={{width: "25%",backgroundColor:"#008B8B",color:"white",border:"none"}}>
          <img src={element.album.images[2].url} class="card-img-top" alt="..."/>
          <div class="card-body">
          <a onClick={()=>{co.play(element.uri)}}><h5 class="card-title">{element.album.name}</h5></a>
            
          </div>
        </div>
            )
        
       
   
    })}
      
      </div>
      </div>) 
}
