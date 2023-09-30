import React from "react";
import "./FormularioInscripcion.css";

function FormularioInscripcion() {
  const [datosI, setDatosI] = React.useState({
    email: "",
    contrasena: "",
    contrasenaConfirm: "",
    boletinN: false,
  });

  function recibirCambios(event) {
    setDatosI((prevDatosI) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prevDatosI,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function manejarRegistro(event) {
    event.preventDefault();
    if (datosI.contrasena === datosI.contrasenaConfirm) {
      console.log("Registrado exitosamente");
      if (datosI.boletinN) {
        console.log("Gracias por registrate a nuestro boletín de noticias");
      }
    } else {
      console.log("Las contraseñas no coinciden");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={manejarRegistro}>
        <input
          type="email"
          placeholder="Correo eléctronico"
          className="form--input"
          name="email"
          onChange={recibirCambios}
          value={datosI.email}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="form--input"
          name="contrasena"
          onChange={recibirCambios}
          value={datosI.contrasena}
        />
        <input
          type="password"
          placeholder="Confirma la contraseña"
          className="form--input"
          name="contrasenaConfirm"
          onChange={recibirCambios}
          value={datosI.contrasenaConfirm}
        />
        <div className="form--marketing">
          <input
            id="okToEmail"
            type="checkbox"
            name="boletinN"
            onChange={recibirCambios}
            checked={datosI.boletinN}
          />
          <label htmlFor="okToEmail">
            Quiero unirme al boletín de noticias
          </label>
        </div>
        <button className="form--submit">Registarse</button>
      </form>
    </div>
  );
}

export default FormularioInscripcion;
