import React from "react";

function IntroPage(props) {
  return (
    <div className="intro">
      <h1 className="intro--titulo">Quizzical</h1>
      <p className="intro--descripcion">
        ¡Bienvenido a Quizzical, el juego de preguntas que desafiará tus
        conocimientos y pondrá a prueba tu agudeza mental!
      </p>
      <button className="intro--boton" onClick={props.cambiarVisibilidad}>
        Iniciar
      </button>
      <div className="bubble-container-sd">
        <img src="./images/blob1.svg"></img>
      </div>
      <div className="bubble-container-ii">
        <img src="./images/blob2.svg"></img>
      </div>
    </div>
  );
}
export default IntroPage;
