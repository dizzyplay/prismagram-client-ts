import * as React from "react";
import {
  HashRouter as MyRouter,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Auth from "../Routes/Auth/";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";
import Header from "./Header";

interface Props {
  isLoggedIn: boolean;
}

const LoggedInRoutes = () => (
  <>
    <Header />
    <Switch>
      <Route exact path={"/"} component={Feed} />
      <Route path={"/explore"} component={Explore} />
      <Route path={"/search"} component={Search} />
      <Route path={"/:username"} component={Profile} />
      <Redirect from={"*"} to={"/"} />
    </Switch>
  </>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path={"/"} component={Auth} />
    <Redirect from={"*"} to={"/"} />
  </Switch>
);

const Router = ({ isLoggedIn }: Props) => (
  <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
);

export default Router;
