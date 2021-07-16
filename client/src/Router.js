import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./componets/auth/Login";
import Register from "./componets/auth/Register";
 
import Navbar from "./componets/layout/Navbar";
import AuthContext from "./context/AuthContext";
import CurrentDAta from "./CurrentDAta";
import booking from "./booking";
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
          <Route exact path="/">
          <div>Home</div>
        </Route>
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
          <Route exact path="/">
          <div>Profile Page</div>
        </Route>
            <Route path="/currentDAta">
              <CurrentDAta />
            </Route>
            <Route path="/counter" exact component={counter}  />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
