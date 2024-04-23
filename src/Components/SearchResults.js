import React,{useContext} from 'react'
import NodeState from "../Context/nodeContext.js";
export default function SearchResults(props) {
    const con=useContext(NodeState)
return(
    
    <div className="container row my-2 text-center" style={{backgroundColor:"#008B8B",color:"white"}}>
       <div className="col" style={{"width":"80%"}}>
    <a onClick={()=>{con.playTrack(props.element.uri);}} style={{color:"white",textDecoration:"none"}} >{props.name}</a>
       </div>
       <div className="col" style={{"width":"20%"}}>
      <img src= {props.image} alt=""/>
       </div>
       </div> 
   
    
)
}
    

  

