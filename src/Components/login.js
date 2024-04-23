import React from 'react'

export default function login() {
    function handleClick(){
        const clientId="3f45d6257e6f444a89158b75c598b9cc"
        const redirecturl="https://Tushar2001bbdu.github.io/SpotifyClone"
       
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
    <div className='container' style={{display:"flex",flexDirection:"column"}}>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/12/Generic-FTR-headers_V10-1440x550.jpg" alt=""/>
        <button className="primary" onClick={handleClick}>Login to Spotify</button>
      
    </div>
  )
}
