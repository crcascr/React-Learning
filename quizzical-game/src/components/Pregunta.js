import React from "react";
import he from "he";

function Pregunta(props) {
  
  console.log(props);

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

  //console.log("Numeros:", indexRespuestas);

  const Respuestas = indexGenerado.map((index) => {
    const respuestaOpcion = he.decode(props.dato.respuestas[index]);
    const isSelected = props.respuestaSeleccionada === index;

    const opcionClassName =isSelected
        ? "pregunta--opcion pregunta--opcion-seleccionada"
        : "pregunta--opcion";
    return (
      <a
        key={index}
        className={opcionClassName}
        onClick={() => props.manejarSeleccion(props.indexPregunta,index)}
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
