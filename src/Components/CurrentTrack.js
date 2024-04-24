import React, { useEffect, useContext } from "react";
import { useState } from "react";
import NodeState from "../Context/nodeContext.js";
import { PiNutFill } from "react-icons/pi";
export default function CurrentTrack() {
  let token = localStorage.getItem("token");
  const con = useContext(NodeState);
  useEffect(()=>{
    con.getCurrentTrack()
  },[con.track])
  
 if(con.track!=null){
    return (
      <div
        className="container text-light"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyItems: "center",
          margin:"5%"
        }}
      >
        <div className="image" style={{ width: "30%" }}>
          <img
            src={con.track.item!=null ?con.track.item.album.images[2].url:""}
            alt=""
            style={{ height: "95%", width: "100%" }}
          />
        </div>
        <div className="details" style={{ width: "70%" }}>
          <div className="name">{con.track.name==undefined?"":con.track.item.name}</div>
          <div className="artists">
            {con.track.item!=null && con.track.item.artists.map((art) => {
              return <span></span>;
            })}
          </div>
        </div>
      </div>
    );
  }
  else{
    return(
      <div className="container text-light text-center" style={{width:"100vw"}}>
        No track is getting currently played OR none of your spotify devices is currently active
      </div>
    )
  }

}
