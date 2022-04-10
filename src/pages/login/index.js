import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Login() {
    const [isLogin, setIsLogin] = useState(() => {
        const saved = localStorage.getItem("isLogin");
        const initialValue = JSON.parse(saved);
        return saved ? initialValue : false
    });
    const currentLogin = JSON.parse(localStorage.getItem("isLogin"))


    useEffect(() => {
    }, [isLogin])

    const AUTHORIZE = 'https://accounts.spotify.com/authorize'
    const redirect_uri = "http://localhost:3000/create-playlist";
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const requestAuthorization = () => {
        let url = AUTHORIZE;
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent('playlist-modify-private');
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        window.location = url;
    }

    const handleLoginButton = () => {
        if (currentLogin) {
            setIsLogin(false)
            localStorage.setItem("isLogin", JSON.stringify(false))
            window.location.reload();
        }
        else {
            setIsLogin(true)
            localStorage.setItem("isLogin", JSON.stringify(true))
            requestAuthorization()
        }
    }

    return (
        <div>
            <Link to="/create-playlist">
                <button onClick={() => handleLoginButton()}>{isLogin ? 'Logout' : 'Login'}</button>
            </Link>
        </div>
    )

}

export default Login;