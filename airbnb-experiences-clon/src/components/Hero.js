import React from "react";
import photoGrid from "../images/photo-grid.png";
function Hero() {
  return (
    <section className="heroAirbnb">
      <img src={photoGrid} alt="Arreglo de fotos" className="hero--imagenes" />
      <h1 className="hero--titulo">Experiencias en línea</h1>
      <p className="hero--descripcion">
        Participe en actividades interactivas únicas dirigidas por anfitriones
        únicos, todo ello sin salir de casa.
      </p>
    </section>
  );
}

export default Hero;
