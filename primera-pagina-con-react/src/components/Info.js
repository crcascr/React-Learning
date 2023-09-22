import React from "react";
import foto from "../images/foto.png";
import mailIcon from "../icons/mail-icon.svg";
import linkedin from "../icons/linkedin-icon.svg";

function Info() {
  return (
    <div className="Info">
      <img src={foto} alt="Foto de la tarjeta" className="info--foto" />
      <h1 className="info--nombre">Cristian Castillo</h1>
      <h2 className="info--puesto">Desarrollador FullStack</h2>
      <h3 className="info--sitio-web">cristiancastillo.website</h3>
      <div className="info--botones">
        <a href="mailto:cristianj_20@hotmail.com" className="info--mail">
          <img className="info--icono" src={mailIcon} alt="Icono de correo" />{" "}
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/crcascr/"
          className="info--linkedin"
          target="_blank"
        >
          <img className="info--icono" src={linkedin} alt="Icono LinkedIn" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Info;
