import React from 'react'

export default function login() {
    function handleClick(){
        const clientId="ce6449902069416998100e188a2e749a"
        const redirecturl="https://tushar2001bbdu.github.io/SpotifyClone/"
       
        const scope=['user-read-email',
        'user-read-private',
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-read-currently-playing','user-read-playback-position',
        'user-top-read','app-remote-control',
        'playlist-modify-public','playlist-modify-private','playlist-read-collaborative','playlist-read-private',
        'user-read-recently-played',"streaming", "user-read-email"]
        const apiurl=`https://accounts.spotify.com/authorize`
        window.location.href=`${apiurl}?client_id=${clientId}&redirect_uri=${redirecturl}&scope=${scope.join('%20')}&response_type=token&show_Dialog=true`
    }
  return (
    <div className='container' style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundImage:"url(https://wallpapers.com/images/hd/spotify-background-6zo7fp83i9u8n9bm.jpg)",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:"100vh",width:"100vw"}}>
        
        <button className="primary" onClick={handleClick} style={{marginTop:"40%",width:"40%",height:"7%"}}>Login to Spotify</button>
      
    </div>
  )
}
