import React from "react";
import Pregunta from "./Pregunta";

function Preguntas(props) {
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
    }
  }

  function juegoNuevo() {
    setRespuestasComprobadas(false);
    setRespuestaSeleccionadas(new Array(props.preguntas.lenght).fill(null));
    setRespuestaCorrecta(new Array(props.preguntas.lenght).fill(null));
    setRespuestaIncorrecta(new Array(props.preguntas.lenght).fill(null));
    props.nuevoJuego();
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
          onClick={
            respuestasComprobadas
              ? () => juegoNuevo()
              : () => comprobarRespuestas()
          }
        >
          {respuestasComprobadas ? "Juego nuevo" : "Comprobar respuestas"}
        </button>
      </div>
    </div>
  );
}

export default Preguntas;
