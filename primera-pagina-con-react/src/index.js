import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
import logo from "./logo192.png";

/*const page = (
  <div>
    <img src={logo} alt="Logo" style={{height:'40px'}}/>
      <h1>Fun facts about React</h1>
      <ul>
          <li>Was first realeased in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
  </div>
)*/

//document.getElementById("root").append(JSON.stringify(page))

function Header() {
  return (
    <header>
      <nav  className="navbar">
        <img src={logo} alt="Logo" className="navImage" />
        <ul className="nav-items">
          <li>Precios</li>
          <li>Acerca de</li>
          <li>Contactanos</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2023 Castillo development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div className="mainContent">
      <h1>Por que estoy emocionado de aprender React</h1>
      <ol>
        <li>Es un nuevo paradigma para mi en cuanto a JavaScript</li>
        <li>Me encanta aprender nuevas cosas</li>
        <li>
          Parece tener buena salida laboral lo que es perfecto puesto que estoy
          desempleado
        </li>
        <li>
          Siento que puede abrirme la puerta para trabajar dentro del mundo del
          desarrollo que sinceramente, ¡me encanta!
        </li>
      </ol>
    </div>
  );
}

function NombreTemporal() {
  return (
    <div>
      <Header />
      <MainContent/>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NombreTemporal />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
