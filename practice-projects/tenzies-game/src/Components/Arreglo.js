import React from "react";

function Arreglo(props) {
  const estilos = { backgroundColor: props.ocupado ? "#59E391" : "#ffffff" };
  return (
    <a className="numeros--numero" style={estilos}>
      {props.numero}
    </a>
  );
}

export default Arreglo;
