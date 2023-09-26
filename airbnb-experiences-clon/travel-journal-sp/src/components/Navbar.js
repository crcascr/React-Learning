import React from "react";
import logo from "../images/world-icon.svg";
function Navbar() {
  return (
      <nav className="navTravel">
          <img src={logo} alt="Logo" className="nav--icon" />
          <h1 className="nav--titulo">mi diario de viaje.</h1>                
      </nav>
  );
}

export default Navbar;