import React from "react";
import Info from "./components/Info";
import Acerca from "./components/Acerca";
import Intereses from "./components/Intereses";
import Footer from "./components/Footer";

function Proyecto1S() {
  return (
    <div className="tarjetaCompleta">
      <div className="tarjetaContainer">
        <Info />
        <div className="tarjetaTexto">
          <Acerca />
          <Intereses/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Proyecto1S;
