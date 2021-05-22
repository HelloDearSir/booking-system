import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from './Movies';
 
import Navbar from "./Navbar";
import Todo from "./Todo";
 
function Router() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/"> </Route>
        <Route path="/Movies"> <Movies/> </Route>
        <Route path = "/Todo"> <Todo/> </Route> 
      </Switch>
    </BrowserRouter>
  );
}


export default Router;