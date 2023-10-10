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

  console.log("RS", respuestasSeleccionadas);

  const preguntas = props.preguntas;

  const elementoPregunta = preguntas.map((pregunta, index) => {
    return (
      <Pregunta
        dato={pregunta}
        key={pregunta.key}
        manejarSeleccion={manejarSeleccion}
        respuestaSeleccionada={respuestasSeleccionadas[index]}
        indexPregunta={index}
      />
    );
  });

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
      <button className="preguntas--boton">Comprobar respuestas</button>
      </div>
      
    </div>
  );
}

export default Preguntas;
