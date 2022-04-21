// import data from './data/data';
import { useState, useEffect } from "react";
import Track from "../../components/track";
import Playlist from "../../components/playlist";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { tokenAuth } from "./slice";

export interface URL {
  [key: string]: string;
}

function CreatePlaylist() {
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [isIdExist, setIsIdExist] = useState<string[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const currentToken = useSelector((state: any) => state.token.value);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params: URL = {};
    hash.split("&").map((hk) => {
      let temp = hk.split("=");
      params[temp[0]] = temp[1];
    });

    const tokenContent = params.access_token;
    setToken(tokenContent);
    dispatch(tokenAuth(tokenContent));
    history.push("/create-playlist");
  }, []);

  const handleSearchOnChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const addTrack = async (id: any, playlist: string) => {
    const res = await axios({
      method: "post",
      url: `https://api.spotify.com/v1/playlists/${playlist}/tracks`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + currentToken,
      },
      data: {
        uris: [...id],
        position: 0,
      },
    });

    return res;
  };

  const getUri = (uri: any, btnSelect: any) => {
    if (btnSelect === true) {
      setIsIdExist((isIdExist) => [...isIdExist, uri]);
    } else {
      setIsIdExist(isIdExist.filter((data) => data !== uri));
    }
  };

  const getSearch = async (search: string) => {
    try {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + currentToken,
        },
      };
      const res = await axios.get(
        `https://api.spotify.com/v1/search?q=${search}&type=track&include_external=audio`,
        options
      );
      const dataTrack = res.data.tracks.items;
      setTracks(dataTrack);
    } catch (e) {
      console.log("ERROR!", e);
    }
  };

  const handelSearchTrack = async (a: any) => {
    a.preventDefault();
    // const inputValue = a.target[0].value;
    const inputValue = searchText;
    const text = inputValue.toLowerCase();
    if (text.length > 1) {
      await getSearch(text);
      // console.log('ini input value berisi di search', inputValue)
    } else {
      setTracks([]);
      // console.log('ini input value kosong di search', inputValue)
    }
    // console.log('ini input value di search', inputValue)
  };

  const trackSong =
    tracks &&
    tracks.map((data: any) => {
      return (
        <Track
          image={data.album.images[1].url}
          title={data.name}
          artist={data.album.artists[0].name}
          uri={data.uri}
          savedUri={getUri}
          isUriExist={isIdExist}
          key={data.uri}
        />
      );
    });

  const createPlaylist = async (title: string, description: string) => {
    try {
      const userOptions = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + currentToken,
        },
      };
      const userRes = await axios.get(
        `https://api.spotify.com/v1/me`,
        userOptions
      );
      const userId = userRes.data.id;
      const res = await axios({
        method: "post",
        url: `https://api.spotify.com/v1/users/${userId}/playlists`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + currentToken,
        },
        data: {
          name: title,
          description: description,
          public: false,
          collaborative: false,
        },
      });
      const id = res.data.id;
      await addTrack(isIdExist, id);
    } catch (e) {
      console.log("ERROR!", e);
    }
  };

  const handleCreatePlaylist = async (a: any) => {
    a.preventDefault();
    const titleValue = a.target[0].value;
    const descriptionValue = a.target[1].value;
    if (titleValue.length <= 10) {
      window.alert("minimum 10 characters for title");
    } else {
      await createPlaylist(titleValue, descriptionValue);
      window.alert(`successfully create ${form.title} playlist `);
      setForm({ ...form, title: "", description: "" });
      setIsIdExist([]);
      setTracks([]);
      setSearchText("");
      // window.location.reload();
    }
  };

  const handleTitle = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleDescription = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="App">
      <Playlist
        getPlaylist={handleCreatePlaylist}
        handleTitle={handleTitle}
        handleDescription={handleDescription}
        title={form.title}
        description={form.description}
      />
      <div className="search-container">
        <form
          onSubmit={(event) => {
            handelSearchTrack(event);
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              handleSearchOnChange(e);
            }}
            value={searchText}
          />
          <Button className="search-btn" size="small" type="submit">
            Search
          </Button>
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
