import React, { useContext } from "react";
import {Link} from "react-router-dom"; 
import LogOutBtn from "./auth/LogOutBtn";
 import AuthContext from "./context/AuthContext";
 
function  Navbar()
{
const { loggedIn } = useContext(AuthContext);

    return <div>
  <Link to="/">Home</Link>
  {loggedIn === false && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </>
      )}

{loggedIn === true && (
        <>
  <Link to= "/CurrentDAta"> CurrentData</Link>
   <Link to="/counter"> Counter</Link>
  <LogOutBtn/>


  </>
)}
    </div>
}
export default Navbar;