import * as React from "react"
import {HashRouter as MyRouter, Route, Switch} from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

interface Props {
  isLoggedIn:boolean
}

const LoggedInRoutes = () => <><Route exact path={"/"} component={Feed} /></>;

const LoggedOutRoutes = () => <><Route exact path={"/"} component={Auth}/></>;

const Router = ({isLoggedIn}:Props) =>
    <MyRouter>
      <Switch>
        {isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}
      </Switch>
    </MyRouter>;

export default Router



