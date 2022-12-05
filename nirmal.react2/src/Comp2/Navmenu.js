import React from "react";
import { Link } from "react-router-dom";

function Navmenu() {
  return (
    <div>
      <Link to="/">Go to Home Page</Link>
      <br />
      <br />
      <Link to="/login">Go to Login Page</Link>
      <br />
      <br />
      <Link to="/about">Go to About Page</Link>
      <br />
      <br />

      <Link to="/logout">Go to Log Out Page</Link>
      <br />
      <br />

      <Link to="/watchlist">Go to Watchlist Page</Link>
      <br />
      <br />

      <Link to="/history">Go to History Page</Link>
      <br />
      <br />

      <Link to="/settings">Go to Setting Page</Link>
      <br />
      <br />
    </div>
  );
}

export default Navmenu;
