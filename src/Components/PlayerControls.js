import React, { useState, useContext, useEffect } from 'react';
import { BsShuffle } from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import NodeContext from '../Context/nodeContext';
import ReactH5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function PlayerControls() {
  const context = useContext(NodeContext);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (context.track) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [context.track]);

  const playNextTrack = () => {
    context.getNextTrack();
  };

  const playPreviousTrack = () => {
    context.getPreviousTrack();
  };

  if (context.track != null) {
    return (
      <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' ,marginLeft:"3%"}}>
        
        <div className="audio-player">
          <ReactH5AudioPlayer
          style={{"backgroundColor":"black","color":"white"}}
            autoPlay
            src={context.track.item.preview_url}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            
            
            // Other props like volume, loop, etc.
          />
        </div>
        <div className="controls" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CgPlayTrackPrev style={{ height: '3rem', width: '3rem', marginRight: '1rem' }} onClick={playPreviousTrack} alt="play previous track" />
          <CgPlayTrackNext style={{ height: '3rem', width: '3rem', marginLeft: '1rem' }} onClick={playNextTrack} alt="play next track" />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
