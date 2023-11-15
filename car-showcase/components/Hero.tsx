"use client";

import Image from "next/image";
import { BotonPersonalizado } from ".";

function Hero() {
  const manejarScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Busca, reserva o alquila un coche -- ¡Rápido y sencillo!
        </h1>
        <p className="hero__subtitle">
          Simplifica tu experiencia de alquiler con nuestro sencillo proceso de
          reserva.
        </p>
        <BotonPersonalizado
          titulo="Explora los coches"
          estilosContenedor="bg-primary-blue text-white rounded-full mt-10"
          manejarClic={manejarScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
