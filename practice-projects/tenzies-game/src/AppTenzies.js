import React from "react";
import Arreglo from "./Components/Arreglo";

function AppTenzies() {
  return (
    <main>
      <div className="numeros">
        <Arreglo numero={1} />
        <Arreglo numero={2} />
        <Arreglo numero={3} />
        <Arreglo numero={4} />
        <Arreglo numero={5} />
        <Arreglo numero={6} />
        <Arreglo numero={6} />
        <Arreglo numero={5} />
        <Arreglo numero={4} />
        <Arreglo numero={3} />
      </div>
    </main>
  );
}

export default AppTenzies;
