import React from "react";
import Arreglo from "./Components/Arreglo";
import { nanoid } from "nanoid";

function AppTenzies() {
  function todosNumerosDado() {
    const arregloNumeros = [];

    for (let i = 0; i < 10; i++) {
      const numeroDado = Math.ceil(Math.random() * 6);
      arregloNumeros.push({ valor: numeroDado, ocupado: true, id: nanoid() });
    }
    return arregloNumeros;
  }

  const [numeros, setNumeros] = React.useState(todosNumerosDado());

  const elementoNumero = numeros.map((numero) => {
    return (
      <Arreglo numero={numero.valor} key={numero.id} ocupado={numero.ocupado} />
    );
  });

  function mezclar() {
    setNumeros(todosNumerosDado());
  }

  return (
    <main>
      <div className="numeros">{elementoNumero}</div>
      <button className="botonMezclar" onClick={mezclar}>
        Mezclar
      </button>
    </main>
  );
}

export default AppTenzies;
