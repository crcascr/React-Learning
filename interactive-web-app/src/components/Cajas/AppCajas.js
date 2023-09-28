import React from "react";
import "./Cajas.css";
import datosCajas from "./datosCajas";
import Caja from "./Caja";

function AppCajas(props) {
  const [cajas, setCajas] = React.useState(datosCajas);
  const estilos = {
    backgroundColor: props.modoOscuro ? "#222222" : "#cccccc",
    color: props.modoOscuro ? "#ffffff" : "#222222",
  };
  const elementos = cajas.map((caja) => {
    return <Caja key={caja.id} activa={caja.on} numero={caja.id} />;
  });
  return <main className="mainCajas">{elementos}</main>;
}

export default AppCajas;
