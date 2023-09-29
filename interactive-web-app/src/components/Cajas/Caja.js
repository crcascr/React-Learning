import React from "react";

function Caja(props) {
  const estilos = {
    backgroundColor: props.activa ? "#222222" : "transparent",
    color: props.activa ? "#ffffff" : "#222222",
  };

  return (
    <div style={estilos} className="caja" onClick={props.invertirColor}>
      {props.numero}
    </div>
  );
}

export default Caja;
