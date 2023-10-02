import React from "react";
import WindowTracker from "./WindowTracker";
import "./WindowTracker.css";

function AppWindowTracker() {
  const [mostrar, setMostrar] = React.useState(true);
  function cambiarMostrar() {
    setMostrar((prevMostrar) => !prevMostrar);
  }
  return (
    <div className="WindowTracker--container">
      <button onClick={cambiarMostrar}>Activar rastreador de ventana</button>
      {mostrar && <WindowTracker />}
    </div>
  );
}

export default AppWindowTracker;
