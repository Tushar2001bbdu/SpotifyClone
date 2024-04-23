import React,{useContext} from 'react'
import NodeState from '../Context/nodeContext'
import { Outlet, Link } from "react-router-dom";
export default function Home() {
    const co=useContext(NodeState)
    console.log(co.RECENT)
  return (
    <div className='container text-light my-2' style={{backgroundColor:"linear-gradient(to bottom, #008B8B, #2F4F4F)"}}>
     <h3>Recently Played</h3> 
    <div className="row" style={{width:"100%"}}>
    {co.RECENT!=null && co.RECENT.items.map((element,index)=>{
        
        if(index<=3){
            return(
                <div class="card" style={{width: "25%",backgroundColor:"#008B8B",color:"white",border:"none"}}>
          <img src={element.track.album.images[2].url} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title"><a onClick={()=>{co.play(element.track.uri)}}>{element.track.name}</a></h5>
            
          </div>
        </div>
            )
        }
       
   
    })}
    
    </div>
    <div className="button text-center">
    <span ><button  style={{"backgroundColor":"#008B8B","color":"white","width":"20%","border":"none"}}><Link to="recply" style={{color:"white",textDecoration:"none"}}>Show More</Link></button>  </span>
    </div>
    <div className="recommend my-2">
    <h3>Recommend for Today</h3>   
    <div className="row" style={{width:"100%"}}>
    {co.recent!=null && co.recent.tracks.map((element,index)=>{
        
        if(index<=3){
            return(
                <div class="card" style={{width: "25%",backgroundColor:"#008B8B",color:"white",border:"none"}}>
          <img src={element.album.images[2].url} class="card-img-top" alt="..."/>
          <div class="card-body">
            <a onClick={()=>{co.play(element.uri)}}><h5 class="card-title">{element.album.name}</h5></a>
            
          </div>
        </div>
            )
        }
       
   
    })}
     <div className="button text-center">
    <span ><button  style={{"backgroundColor":"#008B8B","color":"white","width":"20%","border":"none",color:"white",textDecoration:"none"}}><Link to="recommend" style={{color:"white",textDecoration:"none"}}>Show More</Link></button>  </span>
    </div> 
    </div>
    <div className="artists my-2">
      <h3>Your Favourite Artists</h3>
      <div className="row" style={{width:"100%"}}>
    {co.artists!=null && co.artists.items.map((element,index)=>{
        
        if(index<=3){
            return(
                <div class="card" style={{width: "25%",backgroundColor:"#008B8B",color:"white",border:"none"}}>
          <img src={element.images[2].url} style={{borderRadius:"45%"}}class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title"><Link to="toptracks" style={{color:"white",textDecoration:"none"}} onClick={()=>{co.setArtistsId(element.id)}}>{element.name}</Link></h5>
            
          </div>
        </div>
            )
        }
       
   
    })}
    <div className="button text-center">
    <span ><button  style={{"backgroundColor":"#008B8B","color":"white","width":"20%","border":"none",color:"white",textDecoration:"none"}}><Link to="favArt" style={{color:"white",textDecoration:"none"}}>Show More</Link></button>  </span>
    </div> 
</div>
    </div>
    </div>
    </div>

  )
}
