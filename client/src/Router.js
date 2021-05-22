import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
 
 
import Navbar from "./Navbar";
 
function Router() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          
        </Route>
       </Switch>
    </BrowserRouter>
  );
}


export default Router;