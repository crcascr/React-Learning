import React from "react";

function AppUseEffect() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  //console.log("Componente renderizado");

  React.useEffect(
    function () {
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
      //console.log("Efecto corriendo");
    },
    [count]
  );

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>El contador esta en {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Obtener siguiente caracter
      </button>
    </div>
  );
}

export default AppUseEffect;
