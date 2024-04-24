import React, { useContext } from 'react';
import NodeState from '../Context/nodeContext';
import { Outlet, Link } from "react-router-dom";

export default function Home() {
    const co = useContext(NodeState);
    console.log(co.RECENT);

    return (
        <div className='container text-light my-2' style={{ backgroundColor: "linear-gradient(to bottom, #008B8B, #2F4F4F)" }}>
            <h3>Recently Played</h3>
            <div className="row my-2" style={{ display: "flex", flexWrap: "wrap" }}>
                {co.RECENT != null && co.RECENT.items.map((element, index) => {
                    if (index <= 3) {
                        return (
                            <div className="card" key={index} style={{ flex: "1 1 300px", margin: "0 10px 20px", backgroundColor: "#008B8B", color: "white", border: "none" }}>
                                <img src={element.track.album.images[2].url} className="card-img-top" alt="..." style={{ height: "auto", maxWidth: "100%", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title link"><a onClick={() => { co.play(element.track.uri) }}>{element.track.name}</a></h5>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="button text-center">
                <span ><button style={{ backgroundColor: "#008B8B", color: "white", width: "auto", border: "none" }}><Link to="recply" style={{ color: "white", textDecoration: "none" }}>Show More</Link></button> </span>
            </div>
            {co.recent != null && <div className="recommend my-3">
                <h3>Recommend for Today</h3>
                <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
                    {co.recent != null && co.recent.tracks.map((element, index) => {
                        if (index <= 3) {
                            return (
                                <div className="card" key={index} style={{ flex: "1 1 300px", margin: "0 10px 20px", backgroundColor: "#008B8B", color: "white", border: "none" }}>
                                    <img src={element.album.images[2].url} className="card-img-top" alt="..." style={{ height: "auto", maxWidth: "100%", objectFit: "cover" }} />
                                    <div className="card-body">
                                        <a className="link" style={{color:"white",textDecoration:"none"}}  onClick={() => { co.play(element.uri) }}><h5 className="card-title">{element.album.name}</h5></a>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="button text-center my-2">
                    <span ><button style={{ backgroundColor: "#008B8B", color: "white", width: "auto", border: "none", color: "white", textDecoration: "none" }}><Link to="recommend" style={{ color: "white", textDecoration: "none" }}>Show More</Link></button> </span>
                </div>
            </div>}
            <div className="artists my-3">
                <h3>Your Favourite Artists</h3>
                <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
                    {co.artists != null && co.artists.items.map((element, index) => {
                        if (index <= 3) {
                            return (
                                <div className="card" key={index} style={{ flex: "1 1 300px", margin: "0 10px 20px", backgroundColor: "#008B8B", color: "white", border: "none" }}>
                                    <img src={element.images[2].url} style={{ borderRadius: "45%" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"><Link to="toptracks" className="link" style={{ color: "white", textDecoration: "none" }} onClick={() => { co.setArtistsId(element.id) }}>{element.name}</Link></h5>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="button text-center my-2">
                    <span ><button style={{ backgroundColor: "#008B8B", color: "white", width: "20%", border: "none", color: "white", textDecoration: "none" }}><Link to="favArt" className="link" style={{ color: "white", textDecoration: "none" }}>Show More</Link></button> </span>
                </div>
                </div>
            </div>
        )
    }
