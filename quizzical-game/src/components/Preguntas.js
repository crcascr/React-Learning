import React from "react";
import Pregunta from "./Pregunta";

function Preguntas(props) {
    console.log(props)
    
    const preguntas=props.preguntas

    const elementoPregunta=preguntas.map((pregunta)=>{
        return(
            <Pregunta dato={pregunta}/>
        )
    })

  return (
    <div className="preguntas">
      {elementoPregunta}
      <div className="bubble-container-sd">
        <img src="./images/blob3.svg"></img>
      </div>
      <div className="bubble-container-ii">
        <img src="./images/blob4.svg"></img>
      </div>
    </div>
  );
}

export default Preguntas;
