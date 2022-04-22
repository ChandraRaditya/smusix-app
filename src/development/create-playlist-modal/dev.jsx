import "./dev.css";
import home from "../../assets/icons/home.svg";
import list from "../../assets/icons/list.svg";
import logout from "../../assets/icons/logout.svg";
import person from "../../assets/images/person.jpg";
import banner from "../../assets/images/banner.svg";

export const Dev = () => {
  // const [modal, setModal] = useState(false);

  // const openModal = () => {
  //   setModal(true);
  // };
  return (
    <div className="page-container">
      <div className="side-bar">
        <div className="profil-container">
          <div className="image-profil">
            <img src={person} alt="" />
          </div>
          <p className="username">Hi username</p>
        </div>
        <div className="nav-container">
          <div className="side-item">
            <img src={home} alt="" />
            <p>Home</p>
          </div>
          <div className="side-item">
            <img src={list} alt="" />
            <p>Playlist</p>
          </div>
          <div className="side-item">
            <img src={logout} alt="" />
            <p>Logout</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="search-container">
          <form
          //   onSubmit={(event) => {
          //     handelSearchTrack(event);
          //   }}
          >
            <input
            // type="text"
            // onChange={(e) => {
            //   handleSearchOnChange(e);
            // }}
            // value={searchText}
            />
            <button className="search-btn" size="small" type="submit">
              Search
            </button>
          </form>
          <div className="add-btn-container">
            <button
              className="add-btn"
              // onClick={() => {
              //   openModal();
              // }}
            >
              Add to Playlist
            </button>
          </div>
        </div>
        <div className="track-container">
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
          <div className="track-item">
            <img src={person} alt="" aria-label="album-image" />
            <p className="title" aria-label="track-title">
              title
            </p>
            <p className="artist" aria-label="track-artist">
              artist
            </p>
            {/* <button aria-pressed="true" onClick={() => handleSelectedButton()}>
              {isSelected ? "Deselect" : "Select"}
            </button> */}
            <button>select</button>
          </div>
        </div>
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button>X</button>
            </div>
            <div className="title">
              <h2>Create Playlist</h2>
            </div>
            <div className="create-playlist-container">
              <form
              // onSubmit={(event) => props.getPlaylist(event)}
              >
                <div>
                  <p>Title</p>
                  <input
                    type="text"
                    id="title-input"
                    name="title"
                    aria-label="title"
                    // onChange={(e) => {
                    //   props.handleTitle(e);
                    // }}
                    // value={props.title}
                  />
                </div>
                <div>
                  <p>Description</p>
                  <textarea
                    id="description-input"
                    name="description"
                    aria-label="description"
                    cols="30"
                    rows="10"
                    // onChange={(e) => {
                    //   props.handleDescription(e);
                    // }}
                    // value={props.description}
                  ></textarea>
                </div>
                <div className="button-container">
                  <button type="submit" aria-pressed="true">
                    Create Playlist
                  </button>
                  <button className="btn-cancel" aria-pressed="true">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
