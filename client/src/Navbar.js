import React, { useContext } from "react";
import { Link } from "react-router-dom";


function Navbar() {

    return <div>
        <nav>
            <ul>
                <li>  <Link to="/">Home</Link></li>
                <li>  <Link to="/Movies">Movies</Link></li>
                <li>  <Link to="/Todo">To Do</Link></li>
            </ul>
      
        </nav>



    </div>
}
export default Navbar;