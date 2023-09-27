import React from "react";

function Meme() {
  return (
    <main className="meme">
      <form className="meme--form">
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
        <button className="meme--boton">Obtener un nuevo meme🖼️</button>
      </form>
    </main>
  );
}

export default Meme;
