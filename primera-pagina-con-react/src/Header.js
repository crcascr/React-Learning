import React from "react";
import logo from "./logo192.png";
function Header() {
  return (
    <header>
      <nav  className="navbar">
        <img src={logo} alt="Logo" className="navImage" />
        <ul className="nav-items">
          <li>Precios</li>
          <li>Acerca de</li>
          <li>Contactanos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header