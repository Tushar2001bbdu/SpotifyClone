import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFillPlayCircleFill, BsTrash } from "react-icons/bs";
import NodeState from "../Context/nodeContext";
import { BsPlusCircleFill } from "react-icons/bs";

export default function Body() {
  const con = useContext(NodeState);
  const [id, set] = useState(null);
  useEffect(() => {
    set(con.id);
    console.log(con.playlistData);
  }, [con.id]);

  if (con.playlistData && con.playlistData.items && con.playlistData.items.length > 0) {
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
                  <div className="name" style={{ width: "75%" }}>
                    <h1>{con.playlistData.name}</h1>
                  </div>
                </div>
                <h1>{con.playlistData.description}</h1>
              </div>
            </div>
            <div className="icon">
              <BsFillPlayCircleFill style={{ color: "black", width: "10%", height: "4%" }} onClick={() => { con.playPlaylists() }} />
            </div>
            <div className="content">
              <div className="list">
                <div className="header row my-1">
                  <div className="col text-center md-1">
                    <span>#</span>
                  </div>
                  <div className="col md-2">
                    <span>Title</span>
                  </div>
                  <div className="col md-2">
                    <span>Album</span>
                  </div>
                  <div className="col text-center md-2">
                    <span>
                      Duration
                      <AiFillClockCircle />
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="tracks">
                {con.playlistData.items.map((element, index) => {
                  return (
                    <div className="row my-2">
                      <div className="col" style={{ width: "auto" }}>
                        <span className="mx" style={{ width: "auto" }}>{index + 1}</span>
                        <img src={element.track.album.images[2].url} alt="" />
                      </div>
                      <div className="content col-md-5">
                        <div className="info col md-2" style={{ width: "auto" }}>
                          <span className="name">{element.track.name}</span>
                        </div>
                        <div className="artists col md-2" style={{ width: "auto" }}>
                          {element.track.album.artists.map((artist) => {
                            return (
                              <span className="">{artist.name} </span>
                            );
                          })}
                        </div>
                      </div>
                      <div className="album col md-2" style={{ width: "auto" }}>{element.track.album.name}</div>
                      <div className="duration col md-2" style={{ width: "auto" }}>
                        {Math.floor((element.track.duration_ms / 1000) / 60)}:{((element.track.duration_ms / 1000) % 60).toFixed(0)}
                        <div className="icon">
                          <BsTrash onClick={() => { con.removePlaylistItems(con.id, element.track.uri, con.snapId) }} style={{ "color": "black" }} />
                          <BsFillPlayCircleFill style={{ color: "black", width: "20%", height: "10%" }} onClick={() => { con.play(element.track.uri) }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
        <div className="container">
          <h4 style={{ color: "white" }}>Recommended tracks</h4>
          <div className="items">
            {con.recent != undefined && con.recent.tracks.map((element, index) => {
              if (index <= 5) {
                return (
                  <div className="row my-3">
                    <div className="image" style={{ width: "30%" }}>
                      <img src={element.album.images[0].url} alt="/" style={{ height: "100%", width: "30%" }} />
                    </div>
                    <div className="data" style={{ width: "40%", display: "flex", flexDirection: "column" }}>
                      <div className="trackName">{element.name}</div>
                    </div>
                    <div className="icon" style={{ "width": "30%" }}>
                      <span class="mx-2" style={{ "color": "black" }} onClick={() => { con.addPlaylistItems(con.id, element.uri) }}><BsPlusCircleFill /></span>
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

else {
  return(<div className="container text-light">
    This service is currently unavailible,Please try after some time
    </div>
  )
}
}