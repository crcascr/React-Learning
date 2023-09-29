import React from "react";

function AppMensajes() {
  const [mensajes, setMensajes] = React.useState(["a", "b"]);

  return (
    <div>
      {mensajes.length > 0 && (
        <h1>Tienes {mensajes.length} mensajes sin leer!</h1>
      )}
    </div>
  );
}

export default AppMensajes;
