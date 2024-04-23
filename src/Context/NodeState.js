import React, { useState,useEffect } from "react";
import nodeContext from "./nodeContext";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { redirect } from "react-router-dom";





export default function NodeState(props) {
  
  const[track,setTrack]=useState(null)
  const[playback,setplayback]=useState(false)
  const[id,setid]=useState(null)
  const[pD,setPD]=useState(null)
  const[artists,getArtists]=useState(null)
  const[recent,setRecent]=useState(null)
  const[search,setSearch]=useState(null)
  const devicesUrl = 'https://api.spotify.com/v1/me/player/devices';
  const[check,setCheck]=useState(false)
  const[RECENT,SETRECENT]=useState(null)
  const[toptra,settoptra]=useState(null)
  const[artistId,setartistId]=useState(null)
  const[snapId,setsnapId]=useState(null)
  const[playlistData,setPlaylistData]=useState(null)

useEffect(()=>{if(localStorage.getItem('token')!=null){getCurrentTrack() ;getRecentlyPlayed();GETRECENTLYPLAYED();getFavArtists();getPlaylistData();}},[localStorage.getItem('token')])
  const getCurrentTrack=async()=>{
    
    try{
    let response=await fetch('https://api.spotify.com/v1/me/player/currently-playing',        
    {headers:{
            "Authorization":'Bearer '+localStorage.getItem('token'),
            "Content-Type":"application/json",
        
        }
    })
   
    const res=await response.json()
    setTrack(res)}
    catch(error){
      console.log(error);
    
  
  }}
const setId=(id,snap_id)=>{
setid(id)
setsnapId(snap_id)
getPlaylistData()
}
 const pauseCurrentTrack=async()=>{
  await fetch('https://api.spotify.com/v1/me/player/pause',        
    {method:"PUT",headers:{
            "Authorization":'Bearer '+localStorage.getItem('token'),
            "Content-Type":"application/json",
        
        }
    })
 }
 const setArtistsId=async(id)=>{
  setartistId(id);
 
 
  const response=await fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks`,        
    {method:"GET",headers:{
            "Authorization":'Bearer '+localStorage.getItem('token'),
            "Content-Type":"application/json",
        
        }
    })
    const res=await response.json()
  settoptra(res)
  console.log(toptra)
 }
 const getFavArtists=async()=>{
  const response=await fetch('https://api.spotify.com/v1/me/top/artists',        
  {method:"GET",headers:{
          "Authorization":'Bearer '+localStorage.getItem('token'),
          "Content-Type":"application/json",
      
      }
  })
  const res=await response.json()
  getArtists(res)
 }
 const GETRECENTLYPLAYED=async()=>{
const response=await fetch('https://api.spotify.com/v1/me/player/recently-played',        
{method:"GET",headers:{
        "Authorization":'Bearer '+localStorage.getItem('token'),
        "Content-Type":"application/json",
    
    }
})
const res=await response.json()
SETRECENT(res)
 }
 const getRecentlyPlayed=async()=>{
  const response=await fetch( 'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA&limit=20',{
    method: 'GET',
    headers: {
      "Authorization":'Bearer '+localStorage.getItem('token'),
     
     }
  })
  const res=await response.json()
  setRecent(res)
 }
 const getSearchResults=async(query)=>{
  const response=await fetch( `https://api.spotify.com/v1/search?query=${query}&type=album&limit=10&offset=0`,{
    
    method: 'GET',
    headers: {
      "Authorization":'Bearer '+localStorage.getItem('token'),
      
     
     }
  })
  const res=await response.json()
  setSearch(res)
  console.log(search)
  setCheck(true)
 }
 const Set=()=>{
  setSearch(null)
 }
  const playCurrentTrack=async()=>{
   
    const response =await fetch(devicesUrl, {
      method: 'GET',
      headers: {
        "Authorization":'Bearer '+localStorage.getItem('token'),
       
       }
    })
   
   
    const res=await response.json()
   
    
    await fetch('https://api.spotify.com/v1/me/player/play',  
    {method:"PUT",headers:{
            "Authorization":'Bearer '+localStorage.getItem('token'),
            "Content-Type":"application/json"
           }
        
      
        
      })
   }
    
   
   const playPlaylists=async(uri)=>{
    const response =await fetch(devicesUrl, {
      method: 'GET',
      headers: {
        "Authorization":'Bearer '+localStorage.getItem('token'),
       
       },
       
    })
   
   
    const res=await response.json()
   
    
    await fetch('https://api.spotify.com/v1/me/player/play',  
    {method:"PUT",headers:{
            "Authorization":'Bearer '+localStorage.getItem('token'),
            "Content-Type":"application/json"
           },body:JSON.stringify({"context_uri":uri})
        
      
        
      })
      getCurrentTrack()
   } 
   const playTrack=async(uri)=>{
    await fetch('https://api.spotify.com/v1/me/player/play',  
    {method:"PUT",headers:{
            "Authorization":'Bearer '+localStorage.getItem('token'),
            "Content-Type":"application/json"
           },body:JSON.stringify({"context_uri":uri})
        
      
        
      })

getCurrentTrack()
Set()
   }
   const play=async(uri)=>{
    await fetch('https://api.spotify.com/v1/me/player/play',  
    {method:"PUT",headers:{
            "Authorization":'Bearer '+localStorage.getItem('token'),
            "Content-Type":"application/json"
           },body:JSON.stringify({"uris":[uri]})
        
      
        
      })
getCurrentTrack()
   }
    
  
  
   
  
  // Replace 'yourDeviceId' with the actual device ID of your Spotify clone device
 
  
  const getPlayBackState=async()=>{
    
    let response=await fetch('https://api.spotify.com/v1/me/player',        
    {headers:{
            "Authorization":'Bearer '+localStorage.getItem('token'),
            "Content-Type":"application/json",
        
        }
    })
    let res=await response.json()
    setplayback(res.is_playing);
    


  }

    const getPreviousTrack=async()=>{
      
      
      
      await fetch('https://api.spotify.com/v1/me/player/previous',      
      {method:"POST",headers:{
              "Authorization":'Bearer '+localStorage.getItem('token'),
              "Content-Type":"application/json",
          
          }
      })
      let response=await fetch('https://api.spotify.com/v1/me/player/currently-playing',        
      {headers:{
              "Authorization":'Bearer '+localStorage.getItem('token'),
              "Content-Type":"application/json",
          
          }
      })
      const res=await response.json()
      setTrack(res)
    
      
     
    }
      const getNextTrack=async()=>{
        
       
        
        await fetch('https://api.spotify.com/v1/me/player/next',      
        {method:"POST",headers:{
                "Authorization":'Bearer '+localStorage.getItem('token'),
                
            
            }
        })
        let response=await fetch('https://api.spotify.com/v1/me/player/currently-playing',        
      {headers:{
              "Authorization":'Bearer '+localStorage.getItem('token'),
              "Content-Type":"application/json",
          
          }
      })
      const res=await response.json()
      console.log(res)
      setTrack(res)
    pauseCurrentTrack()
  


    await fetch('https://api.spotify.com/v1/me/player/play',  
    {method:"PUT",headers:{
            "Authorization":'Bearer '+localStorage.getItem('token'),
            "Content-Type":"application/json"
           }
        
        
        
      })
      
      }
      const addPlaylistItems=async(id,uri)=>{
      const response= await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`,  
      {method:"POST",headers:{
              "Authorization":'Bearer '+localStorage.getItem('token'),
              "Content-Type":"application/json"
             },
             body:JSON.stringify({"uris":[uri]})
          
          
          
        })
      }
      const removePlaylistItems=async(id,uri,snap_id)=>{
        const response= await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`,  
        {method:"DELETE",headers:{
                "Authorization":'Bearer '+localStorage.getItem('token'),
                "Content-Type":"application/json"
               },
               body:JSON.stringify({
                "tracks": [
                    {
                        "uri": uri
                    }
                ],
                "snapshot_id": snap_id
            })
            
            
            
          })
        }
        const logout=()=>{
          localStorage.removeItem('token')
        
        }
        const getPlaylistData = async () => {
          const response = await fetch("https://api.spotify.com/v1/me/playlists", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json",
            },
          });
          const jso = await response.json();
    
          setPD(jso);
        };
        const getPlaylists = async () => {
    
      
          
          const response = await fetch(
            `https://api.spotify.com/v1/playlists/${id}`,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
                "Content-Type": "application/json",
              },
            }
          );
          const parsedData = await response.json();
          setPlaylistData(parsedData);
    
          
        };
        
        
      
    
  return (
    
    <nodeContext.Provider value={{track,getCurrentTrack,getPreviousTrack,getNextTrack,playCurrentTrack,getPlayBackState,pauseCurrentTrack,playPlaylists,setId,id,recent,getSearchResults,search,check,playTrack,addPlaylistItems,removePlaylistItems,logout,RECENT,artists,play,Set,toptra,setArtistsId,pD,snapId,playlistData}}>
    {props.children}
  </nodeContext.Provider>
      
  )

}
