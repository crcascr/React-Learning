import React from "react";
import IntroPage from "./components/IntroPage";
import Preguntas from "./components/Preguntas";

function QuizzicalApp() {
  const [mostrarIntro, setMostrarIntro] = React.useState(true);

  function cambiarVisibilidad() {
    setMostrarIntro(false);
  }

  //Prueba carga datos
  const [todasPreguntas, setTodasPreguntas] = React.useState([]);
  const [preguntasSel, setPreguntasSel] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        const data = await response.json();
        setTodasPreguntas(data.results);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }

    fetchData();
  }, []);

  function genNumerosAleatorios() {
    const numerosAleatorios = [];

    while (numerosAleatorios.length < 5) {
      const numeroAletorio = Math.floor(Math.random() * 11);
      if (!numerosAleatorios.includes(numeroAletorio)) {
        numerosAleatorios.push(numeroAletorio);
      }
    }
    return numerosAleatorios;
  }

  React.useEffect(() => {
    const indexPreguntas = genNumerosAleatorios();
    console.log("Todas las preguntas", todasPreguntas);
    console.log(indexPreguntas);

    if (todasPreguntas.length !== 0) {
      const preguntasSeleccionadas = indexPreguntas.map((index) => {
        return {
          categoria: todasPreguntas[index].category,
          pregunta: todasPreguntas[index].question,
          respuestas: [
            todasPreguntas[index].correct_answer,
            ...todasPreguntas[index].incorrect_answers,
          ],
          respuestaCorrecta: todasPreguntas[index].correct_answer,
        };
      });
      //console.log("Objeto preguntas",preguntasSeleccionadas)
      setPreguntasSel(preguntasSeleccionadas);
    }
  }, [todasPreguntas]);

  console.log("Preguntas seleccionadas", preguntasSel);

  return (
    <main>
      {mostrarIntro ? (
        <IntroPage cambiarVisibilidad={cambiarVisibilidad} />
      ) : (
        <Preguntas preguntas={preguntasSel}/>
      )}
    </main>
  );
}

export default QuizzicalApp;
