import React from "react";

function Estrella(props) {
  let starIcon = props.estaLlena ? "star-filled.png" : "star-empty.png";
  return (
    <img
      src={`../images/${starIcon}`}
      className="card--favorite"
      onClick={props.capturarClic}
    />
  );
}

export default Estrella;
