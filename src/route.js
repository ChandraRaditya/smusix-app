import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/index";
import CreatePlaylist from "./pages/createplaylist";

function AppRouter() {
  const currentLogin = JSON.parse(sessionStorage.getItem("isLogin"));

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/create-playlist">
            {currentLogin ? (
              <CreatePlaylist />
            ) : (
              <Redirect exact from="/create-playlist" to="/" />
            )}
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
