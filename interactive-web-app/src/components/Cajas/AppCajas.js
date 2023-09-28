import React from "react";
import "./Cajas.css";
import datosCajas from "./datosCajas";

function AppCajas() {
  const [cajas, setCajas] = React.useState(datosCajas);
  const elementos=cajas.map((caja=>{
    return(
    <div className="caja" key={caja.id}>{caja.id}</div>
    )
  }))
  return (
    <main className="mainCajas">
      {elementos}     
    </main>
  );
}

export default AppCajas;
