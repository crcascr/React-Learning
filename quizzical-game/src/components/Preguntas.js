import React from "react";
import Pregunta from "./Pregunta";

function Preguntas(props) {
  //console.log(props)

  const [respuestaSelec, setRespuestaSelec] = React.useState({
    indexPregunta: null,
    indexRespuesta: null,
    seleccionada: false,
  });

  const [respuestasSeleccionadas, setRespuestaSeleccionadas] = React.useState(
    new Array(props.preguntas.lenght).fill(null)
  );

  function manejarSeleccion(indexPregunta, indexRespuesta) {
    setRespuestaSeleccionadas((prevRespuestasSeleccionadas) => {
      const nuevasRespuestasSeleccionadas = [...prevRespuestasSeleccionadas];
      nuevasRespuestasSeleccionadas[indexPregunta] = indexRespuesta;
      return nuevasRespuestasSeleccionadas;
    });
  }

  //console.log("RS", respuestasSeleccionadas);

  const [respuestaCorrecta, setRespuestaCorrecta] = React.useState(
    new Array(respuestasSeleccionadas.lenght).fill(null)
  );
  const [respuestaIncorrecta, setRespuestaIncorrecta] = React.useState(
    new Array(respuestasSeleccionadas.lenght).fill(null)
  );

  const [respuestasComprobadas, setRespuestasComprobadas] =
    React.useState(false);

  const preguntas = props.preguntas;

  const elementoPregunta = preguntas.map((pregunta, index) => {
    return (
      <Pregunta
        dato={pregunta}
        key={pregunta.key}
        manejarSeleccion={manejarSeleccion}
        respuestaSeleccionada={respuestasSeleccionadas[index]}
        indexPregunta={index}
        respuestaCorrecta={respuestaCorrecta[index]}
        respuestaIncorrecta={respuestaIncorrecta[index]}
        respuestasComprobadas={respuestasComprobadas}
      />
    );
  });

  function comprobarRespuestas() {
    const nuevasRespCorrectas = [...respuestaCorrecta];
    const nuevasRespIncorrectas = [...respuestaIncorrecta];

    if (respuestasSeleccionadas.length < 5) {
      alert("Debes responder todas las preguntas");
    } else {
      respuestasSeleccionadas.forEach((seleccionada, index) => {
        if (seleccionada === 0) {
          nuevasRespCorrectas[index] = 0;
          nuevasRespIncorrectas[index] = false;
        } else {
          nuevasRespCorrectas[index] = 0;
          nuevasRespIncorrectas[index] = true;
        }
      });

      setRespuestaCorrecta(nuevasRespCorrectas);
      setRespuestaIncorrecta(nuevasRespIncorrectas);
      setRespuestasComprobadas(true);

      console.log("Preguntas:", preguntas);
      console.log("Respuestas:", respuestasSeleccionadas);
      console.log("Objeto respuesta correcta:", nuevasRespCorrectas);
      console.log("Objeto respuesta incorrecta:", nuevasRespIncorrectas);
    }
  }

  return (
    <div className="preguntas">
      {elementoPregunta}
      <div className="bubble-container-sd">
        <img src="./images/blob3.svg"></img>
      </div>
      <div className="bubble-container-ii">
        <img src="./images/blob4.svg"></img>
      </div>
      <div className="preguntas--container-boton">
        <h3 className="preguntas--aciertos">
          {respuestasComprobadas
            ? `Tienes ${
                respuestaIncorrecta.filter((valor) => valor === false).length
              }/${respuestasSeleccionadas.length} respuestas correctas`
            : ""}
        </h3>
        <button
          className="preguntas--boton"
          onClick={() => comprobarRespuestas()}
        >
          {respuestasComprobadas ? "Juego nuevo" : "Comprobar respuestas"}
        </button>
      </div>
    </div>
  );
}

export default Preguntas;
