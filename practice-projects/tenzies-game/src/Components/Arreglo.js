import React from "react";

function Arreglo(props) {
  //console.log(props)

  const estilos = { backgroundColor: props.ocupado ? "#59E391" : "#ffffff" };
  return (
    <a
      className="numeros--numero"
      style={estilos}
      onClick={props.mantenerOcupado}
    >
      {props.numero}
    </a>
  );
}

export default Arreglo;
