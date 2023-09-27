import React from "react";
import memesData from "../memesData";

function Meme() {
  let urlMeme;
  /*function saludo(nombre) {
    const fechaCompleta = new Date();
    const hora = fechaCompleta.getHours();
    const minuto = fechaCompleta.getMinutes();
    let momentoDia = "";

    if ((hora >= 4 && hora < 11) || (hora === 11 && minuto <= 59)) {
      momentoDia = "morning";
    }else if (hora>=12 && hora<17){
        momentoDia = "afternoon";
    }else if(hora>=17 && hora<20){
        momentoDia = "evening";
    }else{
        momentoDia = "night";
    }
    console.log("Good",momentoDia,nombre);
    
  }*/
  function recogeClick() {
    const memesLenght = memesData.data.memes.length;

    const numAleatorio = Math.floor(Math.random() * (memesLenght + 1));

    urlMeme = memesData.data.memes[numAleatorio].url;
    console.log(urlMeme);
    //saludo("Cristian");
  }

  const [result, setResult] = React.useState("Yes");
  //console.log(result);

  function cambiarResultado() {
    setResult("No");
  }

  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);
  const elementos = things.map((thing) => <p key={thing}>{thing}</p>);

  function agregarElemento() {
    const nombreElemento = `Thing ${things.length + 1}`;
    console.log(nombreElemento);
    setThings((prevState) => [...prevState, nombreElemento]);
  }

  const [contador, setContador] = React.useState(0);

  function restarContador() {
    setContador(contadorAnterior=>contadorAnterior-1);
  }

  function sumarContador() {
    setContador(contadorAnterior=>contadorAnterior+1);
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
        <button className="meme--boton" onClick={agregarElemento}>
          Agregar elemento
        </button>
        {elementos}
        <div className="state--value" onClick={cambiarResultado}>
          <h1>{result}</h1>
        </div>
        <div className="counter">
          <button className="counter--minus" onClick={restarContador}>–</button>
          <div className="counter--count">
            <h1>{contador}</h1>
          </div>
          <button className="counter--plus" onClick={sumarContador}>+</button>
        </div>
      </div>
    </main>
  );
}

export default Meme;
