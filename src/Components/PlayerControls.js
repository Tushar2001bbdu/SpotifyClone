import React, { useState, useContext, useEffect } from 'react';
import { BsPauseCircleFill, BsPlayCircleFill, BsShuffle } from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import NodeContext from '../Context/nodeContext'; // Assuming your context is named NodeContext

export default function PlayerControls() {
  const context = useContext(NodeContext); // Renamed from 'con' for clarity
  const [isPlaying, setIsPlaying] = useState(false);
  let track=null
  var url="" 


  const togglePlay = () => {
   
      context.playCurrentTrack(); // Assuming you have a function to resume playback in your context
    
    setIsPlaying(!isPlaying);
  };

  const playNextTrack = () => {
  
    context.getNextTrack();
     // Assuming you have a function to play the next track in your context
  };

  const playPreviousTrack = () => {
    context.getPreviousTrack();
     // Assuming you have a function to play the previous track in your context
  };
  const playTrack = () => {
    setIsPlaying(true)
    context.playCurrentTrack(); // Assuming you have a function to play the previous track in your context
  };
  const pauseTrack = () => {
    setIsPlaying(false)
    context.pauseCurrentTrack(); // Assuming you have a function to play the previous track in your context
  };
  
function getData(){

if(context.track!=null){
  return (
    
    <div className='container' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'white' }}>
      <div className="shuffle">
        <BsShuffle style={{ height: '2rem', width: '4rem' }} />
      </div>
      <div className="previous">
        <CgPlayTrackPrev style={{ height: '2rem', width: '4rem' }} onClick={playPreviousTrack} />
      </div>
      {context.track!=null &&    <audio controls style={{backgroundColor:"black",color:"white"}} autoPlay={isPlaying} src={context.track.item.preview_url} >
 
</audio>}
    
      <div className="next">
        <CgPlayTrackNext style={{ height: '2rem', width: '4rem' }} onClick={playNextTrack} />
      </div>
    </div>
  );
}
 }
if(context.track!=null){
  return getData()
}}

 

