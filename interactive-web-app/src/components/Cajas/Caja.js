import React from "react";

function Caja(props){
    console.log(props)
    const estilos = {
        backgroundColor: props.activa ? "#222222" : "none",
        color: props.activa ? "#ffffff" : "#222222",
      };

    return(
        <div style={estilos} className="caja">
        {props.numero}        
      </div>
    )

}

export default Caja