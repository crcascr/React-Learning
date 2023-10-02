import React from "react";

function App(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Datos curiosos sobre React</h1>
      <ul className="main--facts">
        <li>Se lanzó por primera vez en 2013</li>
        <li>Fue creado originalmente por Jordan Walke</li>
        <li>Tiene más de 100 000 estrellas en GitHub</li>
        <li>Es mantenido por Facebook</li>
        <li>
          Impulsa miles de aplicaciones empresariales, incluidas aplicaciones
          móviles
        </li>
      </ul>
    </main>
  );
}

export default App
