import React from "react";
import Arreglo from "./Components/Arreglo";
import { nanoid } from "nanoid";

function AppTenzies() {
  function nuevoNumero() {
    return {
      valor: Math.ceil(Math.random() * 6),
      ocupado: false,
      id: nanoid(),
    };
  }

  function todosNumerosDado() {
    const arregloNumeros = [];
    for (let i = 0; i < 10; i++) {
      arregloNumeros.push(nuevoNumero());
    }
    return arregloNumeros;
  }

  const [numeros, setNumeros] = React.useState(todosNumerosDado());

  function mantenerOcupado(id) {
    //console.log("ID número:", id);
    setNumeros((prevNumeros) => {
      return prevNumeros.map((numero) => {
        return numero.id === id
          ? { ...numero, ocupado: !numero.ocupado }
          : numero;
      });
    });
  }

  const elementoNumero = numeros.map((numero) => {
    return (
      <Arreglo
        numero={numero.valor}
        key={numero.id}
        ocupado={numero.ocupado}
        mantenerOcupado={() => mantenerOcupado(numero.id)}
      />
    );
  });

  function mezclar() {
    //setNumeros(todosNumerosDado());
    setNumeros((prevNumeros) => {
      return prevNumeros.map((numero) => {
        return numero.ocupado ? numero : nuevoNumero();
      });
    });
  }

  return (
    <main>
      <h1 className="titulo">Tenzies</h1>
      <p className="instrucciones">
        Lanza hasta que todos los dados sean iguales. Haz clic en cada dado para
        fijarlo entre lanzamiento y lanzamiento.
      </p>
      <div className="numeros">{elementoNumero}</div>
      <button className="botonMezclar" onClick={mezclar}>
        Lanzar dados
      </button>
    </main>
  );
}

export default AppTenzies;
