import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

function Login() {
  const [isLogin, setIsLogin] = useState(() => {
    const saved = sessionStorage.getItem("isLogin");
    const initialValue = JSON.parse(saved);
    return saved ? initialValue : false;
  });
  const currentLogin = JSON.parse(sessionStorage.getItem("isLogin"));

  const AUTHORIZE = "https://accounts.spotify.com/authorize";
  const redirect_uri = "http://localhost:3000/home";
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
    // if (currentLogin) {
    //   setIsLogin(false);
    //   sessionStorage.setItem("isLogin", JSON.stringify(false));
    //   window.location.reload();
    // } else {
    //   setIsLogin(true);
    //   sessionStorage.setItem("isLogin", JSON.stringify(true));
    //   requestAuthorization();
    // }

    sessionStorage.setItem("isLogin", JSON.stringify(true));
    requestAuthorization();
  };

  return (
    // <div>
    //   <Link to="/create-playlist">
    //     <button onClick={() => handleLoginButton()}>
    //       {isLogin ? "Logout" : "Login"}
    //     </button>
    //   </Link>
    // </div>
    <div className="login-background">
      <h1 className="title-background">
        <span className="title-first-word">DISCOVER</span> NEW MUSIC
      </h1>
      <Link to="/home">
        <button className="button-login" onClick={() => handleLoginButton()}>
          Login
        </button>
      </Link>
    </div>
  );
}

export default Login;
