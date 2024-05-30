import { useState, createContext, useEffect, useContext } from 'react';
import { AuthContext } from './auth';
import api from '../services/api';

export const SpotifyContext = createContext({});

export default function SpotifyProvider({ children }) {
    const { token, signed } = useContext(AuthContext);

    const [user, setUser] = useState([]);
    const [genres, setGenres] = useState([]);
    const [artists, setArtists] = useState([]);
    const [artistsShortTerm, setArtistsShortTerm] = useState([]);
    const [artistsMediumTerm, setArtistsMediumTerm] = useState([]);
    const [artistsLongTerm, setArtistsLongTerm] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [tracksShortTerm, setTracksShortTerm] = useState([]);
    const [tracksMediumTerm, setTracksMediumTerm] = useState([]);
    const [tracksLongTerm, setTracksLongTerm] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData(){
            if(signed){
                try{
                   setLoading(true);
                    const user = await api.get(`me`,{
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    const artists = await api.get(`me/top/artists?time_range=long_term&limit=50&offset=0`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    const artistsShortTerm = await api.get(`me/top/artists?time_range=short_term`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    const artistsMediumTerm = await api.get(`me/top/artists?time_range=medium_term`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    const artistsLongTerm = await api.get(`me/top/artists?time_range=long_term`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    const tracks = await api.get(`me/top/tracks`, {
                        headers: {
                          Authorization: `Bearer ${token}`
                        }
                    });

                    const tracksShortTerm = await api.get(`me/top/tracks?time_range=short_term`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    const tracksMediumTerm = await api.get(`me/top/tracks?time_range=medium_term`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    const tracksLongTerm = await api.get(`me/top/tracks?time_range=long_term`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    const playlists = await api.get(`me/playlists?limit=20&offset=0`, {
                        headers: {
                          Authorization: `Bearer ${token}`
                        }
                    });

                    const genres = artists.data.items.map(artist => artist.genres);

                    const genreCounts = genres.reduce((acc, genre) => {
                        acc[genre] = (acc[genre] || 0) + 1;
                        return acc;
                    }, {});

                    const formattedGenreCounts = Object.entries(genreCounts).map(([name, count]) => ({
                        name,
                        count
                    }));
               
                    setUser(user.data);
                    setArtists(artists.data.items);
                    setArtistsShortTerm(artistsShortTerm.data.items);
                    setArtistsMediumTerm(artistsMediumTerm.data.items);
                    setArtistsLongTerm(artistsLongTerm.data.items);
                    setTracks(tracks.data.items);
                    setTracksShortTerm(tracksShortTerm.data.items);
                    setTracksMediumTerm(tracksMediumTerm.data.items);
                    setTracksLongTerm(tracksLongTerm.data.items);
                    setPlaylists(playlists.data.items);
                    setGenres(formattedGenreCounts);

                } catch(e) {
                    console.log('error', e);
                } finally {
                    setLoading(false);
                }
            }
        }
        getData();
    }, [signed, token])

    return(
        <SpotifyContext.Provider
            value={{
                user,
                genres,
                artists,
                artistsShortTerm,
                artistsMediumTerm,
                artistsLongTerm,
                tracks,
                tracksShortTerm,
                tracksMediumTerm,
                tracksLongTerm,
                playlists,
                loading
            }}
        >
            {children}
        </SpotifyContext.Provider>
    )

}