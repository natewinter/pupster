import React from "react";
import {Link, useLocation} from "react-router-dom";

function NavTabs(props) {
  
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/about" className={window.location.pathname==="/about" || window.location.pathname=== "/" ? "nav-link active": "nav-link"}>about </Link>
      </li>
      <li className="nav-item">
        <Link to="/discover" className={window.location.pathname==="/discover" ? "nav-link active": "nav-link"}> discover </Link>
      </li>
      <li className="nav-item">
        <Link to="/search" className={window.location.pathname==="/search" ? "nav-link active": "nav-link"}>search  </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
