import React from "react";
import memesData from "../memesData"

function Meme() {
    let urlMeme;
  function recogeClick() {
    const memesLenght=memesData.data.memes.length;

    const numAleatorio=Math.floor(Math.random() * (memesLenght+1));
    
    urlMeme=memesData.data.memes[numAleatorio].url;
    console.log(urlMeme)
  }

 
  return (
    <main className="meme">
      <div className="meme--form">
        <input
          type="text"
          className="meme--texto"
          placeholder="Callese"
        ></input>
        <input
          type="text"
          className="meme--texto"
          placeholder="Y tome mi dinero"
        ></input>
        <button className="meme--boton" onClick={recogeClick}>
        Obtener un nuevo meme🖼️
      </button>
      </div>      
    </main>
  );
}

export default Meme;
