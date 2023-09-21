import logo from "./logo.svg";
import "./App.css";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function navbar() {
  return (
    <nav>
      <h1>CruzCastle Inc</h1>
      <ul>
        <li>Precios</li>
        <li>Acerca de nosotros</li>
        <li>Contactanos</li>
      </ul>
    </nav>
  );
}

/*const navbar = (
  <nav>
    <h1>CruzCastle Inc</h1>
    <ul>
      <li>Precios</li>
      <li>Acerca de nosotros</li>
      <li>Contactanos</li>
    </ul>
  </nav>
);*/

export default navbar;
