import axios from "axios";
import React, { useContext } from "react";
 
import AuthContext from "../../context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

 

  async function logOut() {
     
      await axios.get("http://localhost:5000/auth/logout");
  
     
  }

  return <button onClick={logOut}>Log out</button>;
}

export default LogOutBtn;