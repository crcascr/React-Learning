import React from "react";
import IntroPage from "./components/IntroPage";
import Preguntas from "./components/Preguntas";

function QuizzicalApp() {
  const [mostrarIntro, setMostrarIntro] = React.useState(true);

  function cambiarVisibilidad() {
    setMostrarIntro(false);
  }

  const [todasPreguntas, setTodasPreguntas] = React.useState([]);
  const [preguntasSel, setPreguntasSel] = React.useState([]);

  function nuevoJuego() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((data) => setTodasPreguntas(data.results));
  }

  React.useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((data) => setTodasPreguntas(data.results));
  }, []);

  function genNumerosAleatorios() {
    const numerosAleatorios = [];

    while (numerosAleatorios.length < 5) {
      const numeroAletorio = Math.floor(Math.random() * 10);
      if (!numerosAleatorios.includes(numeroAletorio)) {
        numerosAleatorios.push(numeroAletorio);
      }
    }
    return numerosAleatorios;
  }

  React.useEffect(() => {
    const indexPreguntas = genNumerosAleatorios();

    if (todasPreguntas.length !== 0) {
      const preguntasSeleccionadas = indexPreguntas.map((index) => {
        return {
          categoria: todasPreguntas[index].category,
          dificultad: todasPreguntas[index].difficulty,
          pregunta: todasPreguntas[index].question,
          respuestas: [
            todasPreguntas[index].correct_answer,
            ...todasPreguntas[index].incorrect_answers,
          ],
          respuestaCorrecta: todasPreguntas[index].correct_answer,
          key: index,
        };
      });
      setPreguntasSel(preguntasSeleccionadas);
    }
  }, [todasPreguntas]);

  return (
    <main>
      {mostrarIntro ? (
        <IntroPage cambiarVisibilidad={cambiarVisibilidad} />
      ) : (
        <Preguntas
          preguntas={preguntasSel}
          key={preguntasSel.key}
          nuevoJuego={nuevoJuego}
        />
      )}
    </main>
  );
}

export default QuizzicalApp;
