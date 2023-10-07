import React from "react";
import Arreglo from "./Components/Arreglo";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function AppTenzies() {
  const [movimientos, setMovimientos] = React.useState(0);

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
    setMovimientos((prevMovimientos) => {
      return prevMovimientos + 1;
    });
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
    setNumeros((prevNumeros) => {
      return prevNumeros.map((numero) => {
        return numero.ocupado ? numero : nuevoNumero();
      });
    });
    if (juego) {
      setNumeros(todosNumerosDado());
      setJuego(false);
      setMovimientos(0);
    }
  }

  const [juego, setJuego] = React.useState(false);

  React.useEffect(() => {
    const todosOcupados = numeros.every((numero) => numero.ocupado);
    const todosIguales = numeros.every(
      (numero) => numero.valor === numeros[0].valor
    );
    if (todosIguales && todosOcupados) {
      setJuego(true);
    }
  }, [numeros]);

  return (
    <main>
      {juego && <Confetti />}
      <h1 className="titulo">Tenzies</h1>
      <p className="instrucciones">
        Lanza hasta que todos los dados sean iguales. Haz clic en cada dado para
        fijarlo entre lanzamiento y lanzamiento.
      </p>
      <div className="numeros">{elementoNumero}</div>
      <button className="botonMezclar" onClick={mezclar}>
        {juego ? "Nuevo juego" : "Lanzar dados"}
      </button>
      <div className="indicadores">
        <p className="indicadores--movimientos">
          {juego===false
            ? `Llevas ${movimientos} movimientos`
            : `Necesitaste ${movimientos} movimientos para ganar`}
        </p>
      </div>
    </main>
  );
}

export default AppTenzies;
