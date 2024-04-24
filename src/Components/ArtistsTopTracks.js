import React,{useEffect,useContext} from 'react'
import NodeState from '../Context/nodeContext'
import { BsFillPlayCircleFill } from 'react-icons/bs'

export default function ArtistsTopTracks(props) {
  const con=useContext(NodeState)
 
  return (
    <div className='container'>
      <div className="secondSection">
        <div className="heading text-light">
          
        

        {con.toptra!=null &&
        <div className="tracks text-light">
          <h4>Popular</h4>
          <div className="icon">
          
        </div>

          {
            con.toptra!=null ? con.toptra.tracks.map((element,index)=>{
              return(
                <div className='row my-3' >
                  <div className="index " style={{width:"10%"}}>
                    {index+1}
                  </div>
                  <div className="details" style={{width:"70%"}}>
                    <div className="row text-light">
                    <div className="image col" style={{width:"30%"}}>
                      <img src={element.album.images[2].url} alt=""/>
                    </div>
                    <div className="name col" style={{width:"70%"}}>
                      {element.name}
                    </div>
                    </div>
                    
                  </div>
                  <div className="duration col text-light" style={{width:"10%"}} >
                  {Math.floor((element.duration_ms/1000)/60)}:{((element.duration_ms/1000)%60).toFixed(0)}
                  
                  </div>
                  <div className="play" style={{width:"10%"}}>
                  <BsFillPlayCircleFill style={{ color: "black", width: "60%", height: "50%" }} onClick={() => { con.play(element.uri) }} />
                  </div>

                </div>
              )
            }):<div className='container text-light'>This service is currently unavailible.Please try after some time.</div>


          }
       </div> } 
        
        </div>
      </div></div>
    
  )}
 

