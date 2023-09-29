import React from "react";
import "./Formulario.css";

function AppFormulario() {
  const [datos, setDatos] = React.useState({
    nombre: "",
    apellido: "",
    email: "",
    comentarios: "",
    esAmigable: false,
    empleo: "",
    colorFav: "",
  });

  function cambiarDato(event) {
    setDatos((prevDatos) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prevDatos,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function manejarSubmit(event) {
    event.preventDefault();
    console.log(datos);
  }
  //console.log(datos.colorFav);
  return (
    <form className="formFormulario" onSubmit={manejarSubmit}>
      <input
        name="nombre"
        type="text"
        placeholder="Nombre"
        onChange={cambiarDato}
        value={datos.nombre}
      />
      <input
        name="apellido"
        type="text"
        placeholder="Apellido"
        onChange={cambiarDato}
        value={datos.apellido}
      />
      <input
        name="email"
        type="email"
        placeholder="Correo eléctronico"
        onChange={cambiarDato}
        value={datos.email}
      />
      <textarea
        name="comentarios"
        placeholder="Comentarios"
        onChange={cambiarDato}
        value={datos.comentarios}
      ></textarea>
      <input
        name="esAmigable"
        id="esAmigable"
        type="checkbox"
        onChange={cambiarDato}
        checked={datos.esAmigable}
      />
      <label htmlFor="esAmigable">¿Eres amigable?</label>
      <fieldset>
        <legend>Estado actual de empleo</legend>
        <input
          type="radio"
          id="desempleado"
          name="empleo"
          value="desempleado"
          onChange={cambiarDato}
          checked={datos.empleo === "desempleado"}
        />
        <label htmlFor="desempleado">Desempleado</label>
        <input
          type="radio"
          id="medioTiempo"
          name="empleo"
          value="medioTiempo"
          onChange={cambiarDato}
          checked={datos.empleo === "medioTiempo"}
        />
        <label htmlFor="medioTiempo">Medio tiempo</label>
        <input
          type="radio"
          id="empleado"
          name="empleo"
          value="empleado"
          onChange={cambiarDato}
          checked={datos.empleo === "empleado"}
        />
        <label htmlFor="empleado">Empleado</label>
      </fieldset>
      <label htmlFor="colorFav">¿Cuál es tu color favorito?</label>
      <select
        id="colorFav"
        value={datos.colorFav}
        onChange={cambiarDato}
        name="colorFav"
      >
        <option value="">Selecciona</option>
        <option value="rojo">Rojo</option>
        <option value="naranja">Naranja</option>
        <option value="amarillo">Amarillo</option>
        <option value="verde">Verde</option>
        <option value="azul">Azul</option>
        <option value="indigo">Indigo</option>
        <option value="violeta">Violeta</option>
      </select>
      <button>Guardar</button>
    </form>
  );
}

export default AppFormulario;
