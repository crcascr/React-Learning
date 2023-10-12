import React from "react";
import he from "he";

function Pregunta(props) {
  function genNumerosAleatorios() {
    const numerosAleatorios = [];

    while (numerosAleatorios.length < props.dato.respuestas.length) {
      const numeroAletorio = Math.floor(
        Math.random() * props.dato.respuestas.length
      );
      if (!numerosAleatorios.includes(numeroAletorio)) {
        numerosAleatorios.push(numeroAletorio);
      }
    }
    return numerosAleatorios;
  }

  const [longitudPreguntas, setLongitudPreguntas] = React.useState(
    props.dato.respuestas.length
  );

  const [indexGenerado, setIndexGenerado] = React.useState([]);

  React.useEffect(() => {
    const indexRespuestas = genNumerosAleatorios();
    setIndexGenerado(indexRespuestas);
  }, [longitudPreguntas]);

  const [respuestasComprobadas, setRespuestasComprobadas] =
    React.useState(false);

  React.useEffect(() => {
    setRespuestasComprobadas(props.respuestasComprobadas);
  }, [props.respuestasComprobadas]);

  const Respuestas = indexGenerado.map((index) => {
    let respuestaOpcion;
    if (indexGenerado.length > 2) {
      respuestaOpcion = he.decode(props.dato.respuestas[index]);
    } else {
      respuestaOpcion = props.dato.respuestas[index];
    }

    const isSelected = props.respuestaSeleccionada === index;

    const opcionClassName = isSelected
      ? "pregunta--opcion pregunta--opcion-seleccionada"
      : "pregunta--opcion";

    const opcionCorrectaClassName =
      props.respuestaCorrecta === index ? "pregunta--opcion-correcta" : "";

    const opcionIncorrectaClassName =
      props.respuestaIncorrecta && isSelected
        ? "pregunta--opcion-incorrecta"
        : "";

    const opcionRespuestasComprobadas = respuestasComprobadas
      ? "pregunta--opcion-deshabilitada"
      : "";

    return (
      <a
        key={index}
        className={`${opcionClassName} ${opcionCorrectaClassName} ${opcionIncorrectaClassName} ${opcionRespuestasComprobadas}`}
        onClick={() => {
          if (!respuestasComprobadas) {
            props.manejarSeleccion(props.indexPregunta, index);
          }
        }}
        disabled={respuestasComprobadas}
      >
        {respuestaOpcion}
      </a>
    );
  });

  function mayuscula(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
  }
  return (
    <div className="pregunta">
      <h2 className="pregunta--enunciado">{he.decode(props.dato.pregunta)}</h2>
      <div className="pregunta--opciones">{Respuestas}</div>
      <div className="pregunta--indicadores">
        <div className="pregunta--categoria">
          Categoría: {he.decode(props.dato.categoria)}
        </div>
        <div
          className={`pregunta--dificultad pregunta--${he.decode(
            props.dato.dificultad
          )}`}
        >
          Dificultad: {mayuscula(props.dato.dificultad)}
        </div>
      </div>
    </div>
  );
}

export default Pregunta;
