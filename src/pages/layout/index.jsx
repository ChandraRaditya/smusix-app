import SideBar from "../../components/sideBar";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Search from "../search";
import { useHistory } from "react-router-dom";
import "./index.css";
import { getUrl } from "../../libs/helper";
import { useDispatch } from "react-redux";
import { tokenAuth } from "../../redux/tokenSlice";

function Layout() {
  const history = useHistory();
  const url = getUrl();
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenContent = url.access_token;
    dispatch(tokenAuth(tokenContent));
    history.push("/home");
  }, []);

  return (
    <div className="page-container">
      <Router>
        <SideBar />
        <Switch>
          {/* <Route path="/" exact={true} component={Search} />
              {routeList.map((item) => (
                <Route path={item.url} exact={true} key={item.id}>
                  {item.page}
                </Route>
              ))} */}
          <Route exact path="/home">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Layout;
