import React from "react";
import katie from "../images/katie-zaferes.png";
import star from "../images/star.png";
function Card() {
  return (
    <div className="cardsContainer">
      <div className="card">
        <img src={katie} alt="Foto tarjeta" className="card--imagen" />
        <div className="card-valoracion">
          <span>
            <img
              src={star}
              alt="Icono de estrella"
              className="card--valoracion-icono"
            />
          </span>
          <p className="card-valoracion-puntuacion">5.0</p>
          <p className="card--valoracion-opiniones">(6)</p>
          <span className="card--valoracion-separador">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
              <ellipse cx="5" cy="5" rx="2.5" ry="2.5" fill="#918E9B" />
            </svg>
          </span>

          <p className="card-valoracion-pais">Estados Unidos</p>
        </div>

        <p className="card--descripcion">Lecciones de vida con Katie Zaferes</p>
        <div className="card-precio">
          <p className="card-precio-inicio">Desde $</p>
          <p className="card-precio-monto">136</p>
          <p className="card-precio-cantidad">/ persona</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
