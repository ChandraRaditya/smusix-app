import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(() => {
    const saved = sessionStorage.getItem("isLogin");
    const initialValue = JSON.parse(saved);
    return saved ? initialValue : false;
  });
  const currentLogin = JSON.parse(sessionStorage.getItem("isLogin"));
  const history = useHistory();

  useEffect(() => {
    // if (isLogin === false) {
    //     history.push("/");
    // }
  }, [isLogin]);

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

  //   const logOut = () => {
  //     window.location = "http://accounts.spotify.com/logout";
  //     // window.location = 'http://localhost:3000/'
  //   };

  const handleLoginButton = () => {
    if (currentLogin) {
      setIsLogin(false);
      sessionStorage.setItem("isLogin", JSON.stringify(false));
      window.location.reload();
      //   logOut();
      // history.push("/");
    } else {
      setIsLogin(true);
      sessionStorage.setItem("isLogin", JSON.stringify(true));
      requestAuthorization();
    }
  };

  return (
    <div>
      <Link to="/create-playlist">
        <button onClick={() => handleLoginButton()}>
          {isLogin ? "Logout" : "Login"}
        </button>
      </Link>
    </div>
  );
}

export default Login;
