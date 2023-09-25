import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
/*import Contact from "./components/Contact";
import Joke from "./components/Joke";*/

function AirbnbExperiences() {
  const colors = [
    <h3>Red</h3>,
    <h3>Orange</h3>,
    <h3>Yellow</h3>,
    <h3>Green</h3>,
    <h3>Blue</h3>,
    <h3>Indigo</h3>,
    <h3>Violet</h3>
  ];
  return (
    <div className="AirbnbFullPage">
      <Navbar />
      <Hero />
      <Card
        img="katie-zaferes.png"
        puntuacion={5.0}
        contadorOpiniones={6}
        pais="Estados Unidos"
        titulo="Lecciones de vida con Katie Zaferes"
        precio={136}
      />
      <h3>{colors}</h3>
    </div>
  );
}

export default AirbnbExperiences;

/* Practica array.map() */
/* Ejercicio 1
Given an array of numbers, return an array of each number, squared
*/
/*
const nums = [1, 2, 3, 4, 5];

const numpot2 = nums.map((x) => x * x);

console.log("Números al cuadrado: ", numpot2);
*/
/* Ejercicio 2
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/
/*
const names = ["alice", "bob", "charlie", "danielle"];

const nombresMayus=names.map(nombre=>{
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
});

console.log(nombresMayus)
*/
/* Ejercicio 3
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/
/*
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const pokemonTags=pokemon.map(nombre=>`<p>${nombre}</p>`)

console.log(pokemonTags)
*/
/* Parte de Contacto y Joke
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
          email="thecat@hotmail.com"
        />
        <Contact
          img="/images/contacts/pumpkin.png"
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div>
      <Joke
        numero={1}
        inicio="¿Por qué el esqueleto no peleó?"
        fin="Porque no tenía agallas."
      />
      <Joke
        numero={2}
        inicio=" ¿Qué le dice un semáforo a otro semáforo?"
        fin="No me mires, me estoy cambiando."
      />
      <Joke
        numero={3}
        inicio="¿Por qué el libro de matemáticas se puso triste?"
        fin="Porque tenía demasiados problemas."
      />
      <Joke
        numero={4}
        inicio="¿Qué hace una abeja en el gimnasio?"
        fin="¡Zum-ba!"
      />
      <Joke
        numero={5}
        inicio="¿Cómo se dice pañuelo en japonés?"
        fin="Saka-moko."
      />
*/
