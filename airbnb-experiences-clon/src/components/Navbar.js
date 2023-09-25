import React from "react";
import logo from "../images/airbnb-logo.png";
function Navbar() {
  return (
      <nav className="navAirbnb">
          <img src={logo} alt="Logo" className="nav--icon" />                
      </nav>
  );
}

export default Navbar;