import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../pages/login/index";
import Home from "../pages/search";
import Layout from "../pages/layout";

function AppRouter() {
  const currentLogin = JSON.parse(sessionStorage.getItem("isLogin"));

  const routeList = [
    {
      id: 1,
      url: ["/", "/home"],
      page: <Layout />,
    },
  ];

  return (
    // <Router>
    //   <div>
    //     <Login />
    //     <hr />
    //     <Switch>
    //       <Route path="/create-playlist">
    //         {currentLogin ? (
    //           <Home />
    //         ) : (
    //           <Redirect exact from="/create-playlist" to="/" />
    //         )}
    //       </Route>
    //       <Route path="/">
    //         <div>You are in login page</div>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    // <Router>
    //   <Switch>
    //     <Route path="/login" exact={true} component={Login} />
    //     <Route path="/home" exact={true}>
    //       {currentLogin ? <Layout /> : <Redirect to="/login" />}
    //     </Route>
    //   </Switch>
    // </Router>

    <Router>
      <Switch>
        <Route path="/login" exact={true} component={Login} />
        {/* <Route path="/callback" exact={true} component={Callback} />
          <Route path="/logout" exact={true} component={Logout} /> */}

        {routeList.map((item) => (
          <Route path={item.url} exact={true} key={item.id}>
            {currentLogin ? item.page : <Redirect to="/login" />}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default AppRouter;
