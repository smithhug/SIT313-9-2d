import React from "react";
import { Outlet, Link } from "react-router-dom";
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <div className="link-container">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/PostJob">
          Post Job
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default NavigationBar;
