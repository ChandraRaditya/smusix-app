// import data from './data/data';
import { useState, useEffect } from 'react';
import Track from '../../components/track/index';
import Playlist from '../../components/playlist/index';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function CreatePlaylist() {
    const [token, setToken] = useState('');
    const [tracks, setTrack] = useState([]);
    const [isIdExist, setIsIdExist] = useState([]);
    const history = useHistory();

    useEffect(() => {

        const hash = window.location.hash.substring(1);
        const params = {}
        hash.split('&').map(hk => {
            let temp = hk.split('=');
            params[temp[0]] = temp[1]
        });

        const tokenContent = params.access_token
        setToken(tokenContent);

        history.push("/create-playlist");

    }, []);

    const addTrack = async (id, playlist) => {
        const res = await axios({
            method: 'post',
            url: `https://api.spotify.com/v1/playlists/${playlist}/tracks`,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            data: {
                uris: [...id],
                position: 0
            }
        })

        return res
    }

    const getUri = (uri, btnSelect) => {

        if (btnSelect === true) {
            setIsIdExist(isIdExist => [...isIdExist, uri])
        }
        else {
            setIsIdExist(isIdExist.filter((data) => data !== uri))
        }
    }

    const getArtists = async (search) => {
        try {
            const options = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            }
            const res = await axios.get(`https://api.spotify.com/v1/search?q=${search}&type=track&include_external=audio`, options)
            const dataTrack = res.data.tracks.items
            setTrack(dataTrack)
        } catch (e) {
            console.log("ERROR!", e)
        }
    }

    const handelSearchTrack = async (a) => {
        a.preventDefault();
        const inputValue = a.target[0].value;
        await getArtists(inputValue);
    }

    const createPlaylist = async (title, description) => {
        try {

            const userOptions = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            }
            const userRes = await axios.get(`https://api.spotify.com/v1/me`, userOptions)
            const userId = userRes.data.id
            const res = await axios({
                method: 'post',
                url: `https://api.spotify.com/v1/users/${userId}/playlists`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                data: {
                    name: title,
                    description: description,
                    public: false,
                    collaborative: false
                }
            })
            const id = res.data.id
            await addTrack(isIdExist, id)
        } catch (e) {
            console.log("ERROR!", e)
        }
    }

    const handleCreatePlaylist = async (a) => {
        a.preventDefault();
        const title = a.target[0].value;
        const description = a.target[1].value;
        if (title.length <= 10) {
            window.alert('minimum 10 characters for title')
        }
        else {
            await createPlaylist(title, description);
        }
    }

    const trackSong = tracks.map((data) => {
        return (
            <Track
                image={data.album.images[1].url}
                title={data.name}
                artist={data.album.artists[0].name}
                uri={data.uri}
                savetUri={getUri}
                isUriExist={isIdExist}
                key={data.uri}
            />
        )
    });

    return (
        <div className="App">
            <Playlist getPlaylist={handleCreatePlaylist} />
            <div className='search-container'>
                <form onSubmit={(event) => { handelSearchTrack(event) }}>
                    <input type="text" />
                    <input type="submit" value="Submit" id="submitButton" />
                </form>
            </div>
            <div className="tracks">
                <h2>New Release</h2>
                <div className="tracks-container" id="track-container">
                    {trackSong}
                </div>
            </div>
        </div>
    );
}

export default CreatePlaylist;
