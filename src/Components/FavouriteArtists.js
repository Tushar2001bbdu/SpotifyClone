import React ,{useContext}from 'react'
import NodeState from '../Context/nodeContext'
import { Link } from 'react-router-dom'

export default function FavouriteArtists() {
    const co=useContext(NodeState)
 return(
    <div className="artists  container align-items-center" style={{width:"100%"}}>
      <h3 style={{color:"white"}}>Your Favourite Artists</h3>
      <div className="row" style={{width:"100%"}}>
    {co.artists!=null && co.artists.items.map((element,index)=>{
        
        
            return(
                <div class="card" style={{width: "25%",backgroundColor:"#008B8B",color:"white",border:"none"}}>
          <img src={element.images[2].url} style={{borderRadius:"45%"}}class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 className="card-title"><Link to="toptracks" className="link" style={{ color: "white", textDecoration: "none" }} onClick={() => { co.setArtistsId(element.id) }}>{element.name}</Link></h5>
            
          </div>
        </div>
            )
        
       
   
    })}
    
</div>
    </div>
    
 )
}
