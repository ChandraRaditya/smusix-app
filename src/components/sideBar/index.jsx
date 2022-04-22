import { Link } from "react-router-dom";
import home from "../../assets/icons/home.svg";
import list from "../../assets/icons/list.svg";
import logout from "../../assets/icons/logout.svg";
import person from "../../assets/images/person.jpg";
import "./index.css";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="profil-container">
        <div className="image-profil">
          <img src={person} alt="" />
        </div>
        <p className="username">Hi username</p>
      </div>
      <div className="nav-container">
        <Link to="/home">
          <div className="side-item">
            <img src={home} alt="" />
            <p>Home</p>
          </div>
        </Link>
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
  );
}

export default SideBar;
