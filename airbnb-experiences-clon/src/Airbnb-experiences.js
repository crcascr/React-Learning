import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Joke from "./components/Joke";

function AirbnbExperiences() {
  return (
    <div className="AirbnbFullPage">
      <Navbar />
      <Hero />
      <Card />
      <div className="contacts">
        <Contact
          img="/images/contacts/mr-whiskerson.png"
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          img="/images/contacts/fluffykins.png"
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
        <Contact 
        img="/images/contacts/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"/>
        <Contact 
        img="/images/contacts/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"/>
      </div>
      <Joke
      numero="1"
      inicio="¿Por qué el esqueleto no peleó?"
      fin="Porque no tenía agallas."/>
      <Joke
      numero="2"
      inicio=" ¿Qué le dice un semáforo a otro semáforo?"
      fin="No me mires, me estoy cambiando."/>
      <Joke
      numero="3"
      inicio="¿Por qué el libro de matemáticas se puso triste?"
      fin="Porque tenía demasiados problemas."/>
      <Joke
      numero="4"
      inicio="¿Qué hace una abeja en el gimnasio?"
      fin="¡Zum-ba!"/>
      <Joke
      numero="5"
      inicio="¿Cómo se dice pañuelo en japonés?"
      fin="Saka-moko."/>
    </div>
  );
}

export default AirbnbExperiences;
