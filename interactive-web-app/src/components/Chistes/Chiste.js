import React from "react";

function Chiste(props) {
  const [esVisible, setEsVisible] = React.useState(false);

  function cambiarVisibilidad() {
    setEsVisible(prevVisibilidad=>!prevVisibilidad);
  }
  return (
    <div className="chisteContainer">
      {props.setup && <h3>{props.setup}</h3>}
      {esVisible && <p>{props.punchline}</p>}
      <button className="botonChiste" onClick={cambiarVisibilidad}>
        Mostrar Punchline
      </button>
      <hr />
    </div>
  );
}

export default Chiste;
