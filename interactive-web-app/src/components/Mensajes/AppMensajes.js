import React from "react";

function AppMensajes() {
  const [mensajes, setMensajes] = React.useState(["a","b","c"]);

  return (
    <div>
      {mensajes.length > 0 ? (
        <h1>
          Tienes {mensajes.length}{" "}
          {mensajes.length === 1 ? "mensaje" : "mensajes"} sin leer!
        </h1>
      ) : (
        <h1>Estás al día!</h1>
      )}
    </div>
  );
}

export default AppMensajes;
