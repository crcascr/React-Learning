import React from "react";
import star from "../images/star.png";

function Card(props) {  
  let textoDisponibilidad;
  if (props.dato.openSpots === 0) {
    textoDisponibilidad = "Agotado";
  } else if (props.dato.location === "Online") {
    textoDisponibilidad = "En línea";
  }
  
  return (
    <div className="card">
      {textoDisponibilidad && (
        <div className="card--disponibilidad">{textoDisponibilidad}</div>
      )}
      <img
        src={`/images/${props.dato.coverImg}`}
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
        <p className="card-valoracion-puntuacion">{props.dato.stats.rating}</p>
        <p className="card--valoracion-opiniones">
          ({props.dato.stats.reviewCount})
        </p>
        <span className="card--valoracion-separador">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
            <ellipse cx="5" cy="5" rx="2.5" ry="2.5" fill="#918E9B" />
          </svg>
        </span>

        <p className="card-valoracion-pais">{props.dato.location}</p>
      </div>

      <p className="card--descripcion">{props.dato.title}</p>
      <div className="card-precio">
        <p className="card-precio-inicio">Desde $</p>
        <p className="card-precio-monto">{props.dato.price}</p>
        <p className="card-precio-cantidad">/ persona</p>
      </div>
    </div>
  );
}

export default Card;
