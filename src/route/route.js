import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../pages/login/index";
import Home from "../pages/home";

function AppRouter() {
  const currentLogin = JSON.parse(sessionStorage.getItem("isLogin"));

  return (
    <Router>
      <div>
        <Login />
        <hr />
        <Switch>
          <Route path="/create-playlist">
            {currentLogin ? (
              <Home />
            ) : (
              <Redirect exact from="/create-playlist" to="/" />
            )}
          </Route>
          <Route path="/">
            <div>You are in login page</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
