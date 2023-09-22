import React from "react";
import logo from "../images/logo192.png";
function Navbar() {
  return (
      <nav className="navBarP1">
        <div className="nav--icon-and-image-container">
          <img src={logo} alt="Logo" className="nav--icon" />
          <h3 className="nav--logo_text">ReactFacts</h3>
        </div>
        <h4 className="nav--title">Curso de React - Proyecto 1</h4>
      </nav>
  );
}

export default Navbar;
