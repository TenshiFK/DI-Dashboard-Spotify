import React from "react";

export default function LoginButton(){

    const SPOTIFY_CLIENT_ID = '3a358ff835a04f228121326266278a6d';
    const REDIRECT_URI = 'http://localhost:3000/dashboard';
    const SCOPE = 'user-top-read%20user-read-recently-played%20playlist-read-private%20playlist-read-collaborative%20user-read-email%20user-read-email';

    return(
        <a href={`https://accounts.spotify.com/authorize/?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&show_dialog=true`} id="test-button">
            <button className="btns btn-green">Acesse aqui</button>
        </a>
    )
}