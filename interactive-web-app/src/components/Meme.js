import React from "react";

function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function recogeClick() {
    const memesLenght = allMemes.length;

    const numAleatorio = Math.floor(Math.random() * memesLenght); 

    const urlMeme = allMemes[numAleatorio].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: urlMeme,
      };
    });
  }


  function manejarCambios(event) {
    setMeme((prevMeme) => {
      const { name, value } = event.target;
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main className="meme-main">
      <div className="meme--form">
        <input
          type="text"
          className="meme--texto"
          placeholder="Texto superior"
          name="topText"
          onChange={manejarCambios}
          value={meme.topText}
        ></input>
        <input
          type="text"
          className="meme--texto"
          placeholder="Texto inferior"
          name="bottomText"
          onChange={manejarCambios}
          value={meme.bottomText}
        ></input>
        <button className="meme--boton" onClick={recogeClick}>
          Obtener un nuevo meme🖼️
        </button>
      </div>
      <div className="meme">
        <img className="meme--imagen" src={meme.randomImage} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>

    </main>
  );
}

export default Meme;
