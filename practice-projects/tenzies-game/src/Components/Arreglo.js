import React from "react";

function Arreglo(props) {
  //console.log(props)

  const ArregloPuntos = ({ numero }) => {
    const puntos = [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ];

    switch (numero) {
      case 1:
        puntos[1][1] = true;
        break;
      case 2:
        puntos[0][2] = true;
        puntos[2][0] = true;
        break;
      case 3:
        puntos[0][2] = true;
        puntos[1][1] = true;
        puntos[2][0] = true;
        break;
      case 4:
        puntos[0][0] = true;
        puntos[0][2] = true;
        puntos[2][0] = true;
        puntos[2][2] = true;
        break;
      case 5:
        puntos[0][0] = true;
        puntos[0][2] = true;
        puntos[1][1] = true;
        puntos[2][0] = true;
        puntos[2][2] = true;
        break;
      case 6:
        puntos[0][0] = true;
        puntos[0][1] = true;
        puntos[0][2] = true;
        puntos[2][0] = true;
        puntos[2][1] = true;
        puntos[2][2] = true;
        break;
    }
    //console.log("Número",numero,"Puntos",puntos)
    return (
      <div
        className="dado-container numeros--numero"
        style={estilos}
        onClick={props.mantenerOcupado}
      >
        <div className="dado-grilla">
          {puntos.map((fila, filaIndex) => (
            <div key={filaIndex} className="fila">
              {fila.map((tienePunto, puntoIndex) => (
                <div
                  key={puntoIndex}
                  className={`punto ${
                    tienePunto ? "dado--activo" : "dado--inactivo"
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const estilos = { backgroundColor: props.ocupado ? "#59E391" : "#ffffff" };
  return <ArregloPuntos numero={props.numero} />;
}

/*
<div className="dado-container">
      <h1
        className="numeros--numero"
        style={estilos}
        onClick={props.mantenerOcupado}
      >
        {props.numero}
      </h1>
      </div>
*/

export default Arreglo;
