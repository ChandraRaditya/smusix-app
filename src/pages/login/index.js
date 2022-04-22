import { Link } from "react-router-dom";
import "./index.css";

function Login() {
  const AUTHORIZE = "https://accounts.spotify.com/authorize";
  const redirect_uri = "http://localhost:3000/create-playlist";
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const requestAuthorization = () => {
    let url = AUTHORIZE;
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent("playlist-modify-private");
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    window.location = url;
  };

  const handleLoginButton = () => {
    sessionStorage.setItem("isLogin", JSON.stringify(true));
    requestAuthorization();
  };

  return (
    <div className="login-background">
      <h1 className="title-background">
        <span className="title-first-word">DISCOVER</span> NEW MUSIC
      </h1>
      <Link to="/create-playlist">
        <button className="button-login" onClick={() => handleLoginButton()}>
          Login
        </button>
      </Link>
    </div>
  );
}

export default Login;
