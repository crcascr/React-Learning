import React from "react";
import twitter from "../icons/twitter-icon.svg";
import instagram from "../icons/instagram-icon.svg";
import github from "../icons/github-icon.svg";

function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://twitter.com/crcascr"
        className="footer--link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="footer--icono" src={twitter} alt="Icono Twitter (X)" />
      </a>
      <a
        href="https://www.instagram.com/cristiancastill0/"
        className="footer--link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="footer--icono-instagram" src={instagram} alt="Icono Instagram" />
      </a>
      <a
        href="https://github.com/crcascr"
        className="footer--link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="footer--icono" src={github} alt="Icono GitHub" />
      </a>
    </div>
  );
}

export default Footer;
