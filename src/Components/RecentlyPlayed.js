import React,{useContext} from 'react'
import NodeState from '../Context/nodeContext'
export default function RecentlyPlayed() {
    const co=useContext(NodeState)
  return (
    
    <div className='container text-light'style={{height:"50%"}}>
      <h3>Recently Played</h3>
      <div className="row" style={{width:"100%"}}>
    {co.RECENT!=null && co.RECENT.items.map((element,index)=>{
        
        
            return(
                <div class="card" style={{width: "25%",backgroundColor:"#008B8B",color:"white",border:"none"}}>
          <img src={element.track.album.images[2].url} class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title"><a onClick={()=>{co.play(element.track.uri)}}>{element.track.name}</a></h5>
            
          </div>
        </div>
            )
        
       
   
    })}
    
    </div>
    </div>
  )
}
