import React,{useContext} from 'react'
import NodeState from '../Context/nodeContext'
export default function Recommend() {
    const co=useContext(NodeState)
    return (
      
      <div className='container text-light'style={{height:"50%"}}>
        <h3>Recently Played</h3>
        <div className="row" style={{width:"100%"}}>
        {co.recent != null && co.recent.tracks.map((element, index) => {
                        
                            return (
                                <div className="card" key={index} style={{ flex: "1 1 300px", margin: "0 10px 20px", backgroundColor: "#008B8B", color: "white", border: "none" }}>
                                    <img src={element.album.images[2].url} className="card-img-top" alt="..." style={{ height: "auto", maxWidth: "100%", objectFit: "cover" }} />
                                    <div className="card-body">
                                        <a className="link" style={{color:"white",textDecoration:"none"}} onClick={() => { co.play(element.uri) }}><h5 className="card-title">{element.album.name}</h5></a>
                                    </div>
                                </div>
                            )
                        }
                    )}
      
      </div>
      </div>) 
}
