import React from "react";

function Caja(props) {
  const [caja, setCaja] = React.useState(props);
  function cambiarColor() {
    setCaja((prevCaja) => ({
      ...prevCaja,
      activa: !prevCaja.activa,
    }));
  }
  const estilos = {
    backgroundColor: caja.activa ? "#222222" : "transparent",
    color: caja.activa ? "#ffffff" : "#222222",
  };

  return (
    <div style={estilos} className="caja" onClick={cambiarColor}>
      {caja.numero}
    </div>
  );
}

export default Caja;
