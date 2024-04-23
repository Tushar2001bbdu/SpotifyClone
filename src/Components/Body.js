import React, { useEffect,useContext} from "react";
import { useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillPlayCircleFill, BsPlayCircleFill ,BsPlusSlashMinus,BsPlusCircleDotted, BsPlusCircleFill} from "react-icons/bs";
import NodeState from "../Context/nodeContext";
export default function Body() {
  const con=useContext(NodeState)
  const [id,set]=useState(null)
  useEffect(()=>{
    set(con.id)
  },[con.id])

 
  

  return (
    <div className="container text-light" style={{ height: "100%", width: "100%" }}>

      {con.playlistData != null && (
        <>
        
          <div className="playlists">
            <div className="image">
              <img src="" alt=""></img>
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <div className="row">
                <div className="image" style={{ width: "25%" }}>
                {con.playlistData != null && con.playlistData!=null && con.playlistData.track!=null&& <img
                    src={con.playlistData != null ? con.playlistData.images[0].url : ""}
                    alt="playlist"
                    style={{ height: "100%", width: "100%" }}
                  />}
                </div>
                <div className="name" style={{ width: "75%" }}>
                  <h1>{con.playlistData.name}</h1>
                </div>
              </div>

              <h1>{con.playlistData.description}</h1>
            </div>
          </div>
          <div className="icon">
            <BsFillPlayCircleFill style={{color:"black",width:"10%",height:"4%"}} onClick={()=>{con.playPlaylists(con.playlistData.uri)}}/>
        </div>
          <div className="list">
            <div className="header row my-1">
              <div className="col md-2 text-center">
                <span>#</span>
              </div>
              <div className="col md-5">
                <span>Title</span>
              </div>
              <div className="col md-2 text-center">
                <span>Album</span>
              </div>
              <div className="col md-2 text-center">
                <span>
                  Duration
                  <AiFillClockCircle />
                </span>
              </div>
            </div>
          </div>
          <hr/>
          <div className="tracks">
            {con.playlistData != null && con.playlistData!=null&&
              con.playlistData.tracks.items.map((element, index) => {
                return (
                  <div className="row my-2">
                    <div className="col-md-2">
                      <span className="mx-2">{index + 1}</span>

                      <img src={element.track.album.images[2].url} alt="" />
                    </div>
                    <div
                      className="content col-md-5"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div className="info">
                        <span className="name">
                          {element.track.name}
                        </span>
                      </div>
                      <div className="artists">
                        {element.track.album.artists.map((element) => {
                          return (
                            <span className="">{element.name} </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="album col-md-2">
                      {element.track.album.name}
                    </div>
                    <div className="duration col-md-2">
                      {Math.floor((element.track.duration_ms/1000)/60)}:{((element.track.duration_ms/1000)%60).toFixed(0)}
                      <div className="icon">
                      <BsPlusSlashMinus onClick={()=>{con.removePlaylistItems(con.id,element.track.uri,con.snapId)}}style={{"color":"black"}}/>
                    </div>
                    </div>
                   
                  </div>
                );
              })}
          </div>
        </>
      )}
      <div className="container">
        <h4 style={{color:"white"}}>Recommended tracks</h4>
        <div className="items">
          {con.recent!=undefined && con.recent.tracks.map((element,index)=>{

          if(index<=5){
            return(<div className="row my-3">
            <div className="image" style={{width:"30%"}}>
             <img src={element.album.images[0].url} alt="/" style={{height:"100%",width:"30%"}}/>
            </div>
            <div className="data" style={{width:"40%",display:"flex",flexDirection:"column"}}>
              <div className="trackName">
                {element.name}
              </div>
            </div>
            <div className="icon" style={{"width":"30%"}}>
            <span class="mx-2" style={{"color":"black"}} onClick={()=>{con.addPlaylistItems(con.id,element.uri)}}><BsPlusCircleFill/></span>
            </div>
            </div>
            )
          }
          
          
          })}
        </div>
      </div>
    </div>
  );
}
