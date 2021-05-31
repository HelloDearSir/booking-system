import React, { useContext } from "react";
import {Link} from "react-router-dom"; 
import LogOutBtn from "../auth/LogOutBtn";
import AuthContext from "../../context/AuthContext";
 
function  Navbar()
{
const { loggedIn } = useContext(AuthContext);

return <div>
<nav>
  <ul>
   <li> <Link to="/">Home</Link> </li>
    {loggedIn === false && (
      <>
       <li><Link to="/register">Register</Link></li> 
       <li> <Link to="/login">Log in</Link> </li> 
      </>
    )}
    {loggedIn === true && (
      <>
      <li><Link to="/CurrentDAta"> CurrentData</Link> </li> 
      <li><Link to="/counter"> Counter</Link> </li>
      <li><LogOutBtn /></li>  
      </>
    )}
  </ul>
</nav>
</div>
}

export default Navbar;
