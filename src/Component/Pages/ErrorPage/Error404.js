import React from "react";
import "./Error404.css";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <div className="Error-404-section">
      <div className="Error-404-mainSection">
        <h1>404</h1>
        <h2>Sorry, we were unable to find that page</h2>
        <NavLink to="/">
          <button>Back to Home</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Error404;
