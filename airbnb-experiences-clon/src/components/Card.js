import React from "react";
//import katie from "../images/katie-zaferes.png";
import star from "../images/star.png";
function Card(props) {
  return (
    <div className="card">
      <img
        src={`/images/${props.img}`}
        alt="Foto tarjeta"
        className="card--imagen"
      />
      <div className="card-valoracion">
        <span>
          <img
            src={star}
            alt="Icono de estrella"
            className="card--valoracion-icono"
          />
        </span>
        <p className="card-valoracion-puntuacion">{props.puntuacion}</p>
        <p className="card--valoracion-opiniones">
          ({props.contadorOpiniones})
        </p>
        <span className="card--valoracion-separador">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
            <ellipse cx="5" cy="5" rx="2.5" ry="2.5" fill="#918E9B" />
          </svg>
        </span>

        <p className="card-valoracion-pais">{props.pais}</p>
      </div>

      <p className="card--descripcion">{props.titulo}</p>
      <div className="card-precio">
        <p className="card-precio-inicio">Desde $</p>
        <p className="card-precio-monto">{props.precio}</p>
        <p className="card-precio-cantidad">/ persona</p>
      </div>
    </div>
  );
}

export default Card;
