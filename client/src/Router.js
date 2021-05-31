import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./componets/auth/Login";
import LogOutBtn from "./componets/auth/LogOutBtn";
import Register from "./componets/auth/Register";
 
import Navbar from "./componets/layout/Navbar";
import AuthContext from "./context/AuthContext";
import CurrentDAta from "./CurrentDAta";
 
function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/currentDAta">
              <CurrentDAta />
            </Route>
            <Route path="/logout">
              <LogOutBtn/>
            </Route>
           
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;