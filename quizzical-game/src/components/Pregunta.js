import React from "react";
import he from "he";

function Pregunta(props) {
  //console.log(props);

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

  const [indexGenerado, setIndexGenerado] = React.useState([]);

  React.useEffect(() => {
    const indexRespuestas = genNumerosAleatorios();
    setIndexGenerado(indexRespuestas);
  }, []);

  const [respuestasComprobadas, setRespuestasComprobadas] =
    React.useState(false);

  React.useEffect(() => {
    setRespuestasComprobadas(props.respuestasComprobadas);
  }, [props.respuestasComprobadas]);

  //console.log("Numeros:", indexRespuestas);

  const Respuestas = indexGenerado.map((index) => {
    const respuestaOpcion = he.decode(props.dato.respuestas[index]);
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

    const opcionRespuestasComprobadas =
      respuestasComprobadas 
        ? "pregunta--opcion-deshabilitada"
        : "";

    console.log(respuestasComprobadas);

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
  return (
    <div className="pregunta">
      <h2 className="pregunta--enunciado">{he.decode(props.dato.pregunta)}</h2>
      <div className="pregunta--opciones">{Respuestas}</div>
    </div>
  );
}

export default Pregunta;
