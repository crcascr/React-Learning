import React from "react";
import "./Cajas.css";
import datosCajas from "./datosCajas";
import Caja from "./Caja";

function AppCajas(props) {
  const [cajas, setCajas] = React.useState(datosCajas);

  function cambiarColor(numero) {
    const cajaSeleccionada = cajas.find((caja) => caja.id === numero);

    setCajas((prevCajas) => {
      const nuevasCajas = [];
      for (let i = 0; i < prevCajas.length; i++) {
        const cajaActual = prevCajas[i];
        if (cajaActual.id === numero) {
          const cajaActualizada = {
            ...cajaActual,
            on: !cajaActual.on,
          };
          nuevasCajas.push(cajaActualizada);
        } else {
          nuevasCajas.push(cajaActual);
        }
      }
      return nuevasCajas;
    });
  }

  const elementos = cajas.map((caja) => {
    return (
      <Caja
        key={caja.id}
        activa={caja.on}
        numero={caja.id}
        invertirColor={cambiarColor}
      />
    );
  });
  return <main className="mainCajas">{elementos}</main>;
}

export default AppCajas;
