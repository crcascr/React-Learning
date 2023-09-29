import React from "react";
import "./Cajas.css";
import datosCajas from "./datosCajas";
import Caja from "./Caja";

function AppCajas(props) {
  const [cajas, setCajas] = React.useState(datosCajas);

  function cambiarColor(numero) {
    setCajas((prevCajas) => {
      return prevCajas.map((caja) => {
        return caja.id === numero ? { ...caja, on: !caja.on } : caja;
      });
    });
  }

  const elementos = cajas.map((caja) => {
    return (
      <Caja
        key={caja.id}
        activa={caja.on}
        numero={caja.id}
        invertirColor={()=>cambiarColor(caja.id)}
      />
    );
  });
  return <main className="mainCajas">{elementos}</main>;
}

export default AppCajas;
