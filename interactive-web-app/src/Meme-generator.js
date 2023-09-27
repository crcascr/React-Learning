import React from "react";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";

function MemeGenerator() {
  return (
    <div className="memeGeneratorFullPage">
      <Navbar />
      <Meme />
    </div>
  );
}

export default MemeGenerator;
