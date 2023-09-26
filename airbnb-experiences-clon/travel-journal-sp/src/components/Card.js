import React from "react";
import location from "../images/location-icon.svg";

function Card(props) {
  const cardClassName = `card ${props.control ? '' : 'card-with-border'}`;
  return (
    <div className={cardClassName}>
      <div className="card--foto">
        <img
          src={props.dato.linkImagen}
          alt={`Foto ${props.dato.titulo}`}
          className="card--imagen"
        />
      </div>
      <div className="card--ubicacion">
        <div className="card--ubicacion-header">
          <span>
            <img
              src={location}
              alt="Icono de pin en mapa"
              className="card--ubicacion-icono"
            />
          </span>
          <p className="card--ubicacion-pais">{props.dato.ubicacion.toUpperCase()}</p>
          <a className="card--ubicacion-maps" href={props.dato.googleMapsUrl}>Ver en Google Maps</a>
        </div>
        <div className="card--ubicacion-detalles">
          <h2 className="card--ubicacion-lugar">{props.dato.titulo}</h2>
          <h3 className="card--ubicacion-fechas">
          {props.dato.fechaInicio} - {props.dato.fechaFin}
          </h3>
          <p className="card--ubicacion-descripcion">
          {props.dato.descripcion}
          </p>
        </div>
      </div>      
    </div>
  );
}

export default Card;
