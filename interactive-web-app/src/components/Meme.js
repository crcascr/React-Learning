import React from "react";

function Meme() {
  function recogeClick() {
    console.log("Clic capturado");
  }

  function recogeCursor() {
    console.log("Cursor capturado");
  }
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
      </form>
      <img src="https://picsum.photos/640/360" onMouseEnter={recogeCursor} />
      <button className="meme--boton" onClick={recogeClick}>
        Obtener un nuevo meme🖼️
      </button>
    </main>
  );
}

export default Meme;
