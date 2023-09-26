import React from "react";
import logo from "../images/meme-icon.png";
function Navbar() {
  return (
      <nav className="navMeme">
        <div className="nav--logo">
        <img src={logo} alt="Logo" className="nav--icon" />
        <h1 className="nav--nombre">Generador de memes</h1>
        </div>
        <h2 className="nav--curso">Curso de React - Proyecto 3</h2>                  
      </nav>
  );
}

export default Navbar;