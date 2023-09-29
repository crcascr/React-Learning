import React from "react";
import memesData from "../memesData";
import App from "./Contador/AppContador";
import Cliente from "./Cliente/Cliente";
import Saludo from "./Saludo/Saludo";
import AppCajas from "./Cajas/AppCajas";
import AppChistes from "./Chistes/AppChistes";

function Meme() {
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

  /*
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
    setContador((contadorAnterior) => contadorAnterior - 1);
  }

  function sumarContador() {
    setContador((contadorAnterior) => contadorAnterior + 1);
  }

  //Ternaria en JavaScript
  const [isGoingOut,setIsGoingOut] = React.useState(true);

  function changeMind(){
    setIsGoingOut(prevMind=>!prevMind)
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
      <img className="meme--imagen" src={url} />
      <div className="state" onClick={changeMind}>
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div className="state--value">
          <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
      </div>
    </main>
  );
 */

  //Matrices
  /*
    const [arregloCosas,setArregloCosas]=React.useState(["Cosa 1", "Cosa 2"])

    const elementos = arregloCosas.map((thing) => <p key={thing}>{thing}</p>);

    //function agregarItem(){
    //    setArregloCosas(prevArregloCosas=>[...prevArregloCosas,`Cosa ${prevArregloCosas.length+1}`])
    //}

    const[algo,setAlgo]=React.useState(["Algo 1","Algo 2","Algo 3"])

    const cosas=algo.map((cosa)=><p key={cosa}>{cosa}</p>)

    function agregarItem(){
        setAlgo(prevAlgo=>[...prevAlgo,`Algo ${prevAlgo.length+1}`])
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
      <img className="meme--imagen" src={url} />
      <button className="meme--boton" onClick={agregarItem}>Agregar Item</button>
      {cosas}
    </main>
  );
  */

  //Objetos en useState
  /*
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  let estrella = contact.isFavorite ? "star-filled.png" : "star-empty.png";

  function toggleFavorite() {
    //console.log("Toggle Favorite");
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
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
      <img className="meme--imagen" src={url} />
      <button className="meme--boton">Agregar Item</button>
      <div className="objetosUseState" style={{ marginTop: "2rem" }}>
        <article className="card">
          <div className="card--info">
            <h2 className="card--favorite" onClick={toggleFavorite}>
              Marcar favorito {estrella}
            </h2>
            <h2 className="card--name">
              {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
          </div>
        </article>
      </div>
    </main>
  );
  */

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemesImages] = React.useState(memesData);
  function recogeClick() {
    const memesLenght = memesData.data.memes.length;

    const numAleatorio = Math.floor(Math.random() * memesLenght);
    console.log(numAleatorio);

    const urlMeme = allMemeImages.data.memes[numAleatorio].url;
    console.log("Url obtenida:", urlMeme);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: urlMeme,
      };
    });
    //saludo("Cristian");
  }
  //console.log(url);

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
      <img className="meme--imagen" src={meme.randomImage} />
      <App />
      <Cliente />
      <Saludo/>
      <AppCajas modoOscuro={false}/>
      <AppChistes/>
    </main>
  );
}

export default Meme;
