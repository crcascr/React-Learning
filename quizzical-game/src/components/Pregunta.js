import React from "react";
import he from "he";

function Pregunta(props){
    console.log(props)
    return(
        <div className="pregunta">
            <h2 className="pregunta--enunciado">{he.decode(props.dato.pregunta)}</h2>
        </div>
    )

}

export default Pregunta