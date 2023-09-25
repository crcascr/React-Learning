import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./components/Contact";

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
    </div>
  );
}

export default AirbnbExperiences;
