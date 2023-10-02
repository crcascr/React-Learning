import React from "react";

function WindowTracker() {
  const [anchoPantalla, setAnchoPantalla] = React.useState(window.innerWidth);
  React.useEffect(function () {
    function verAncho() {
      setAnchoPantalla(window.innerWidth);
    }
    window.addEventListener("resize", verAncho);

    return function () {
      window.removeEventListener("resize", verAncho);
    };
  }, []);
  return <h1>Ancho de la pantalla: {anchoPantalla}</h1>;
}

export default WindowTracker;
