import "./dev.css";
import home from "../../assets/icons/home.svg";
import list from "../../assets/icons/list.svg";
import logout from "../../assets/icons/logout.svg";
import person from "../../assets/images/person.jpg";
import banner from "../../assets/images/banner.svg";

export const Dev = () => {
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
      </div>
    </div>
  );
};
