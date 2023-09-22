import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
//import Aplicacion from './Aplicacion'
import Proyecto1S from "./Proyecto1S";

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

/*function App() {
  return (
    <Aplicacion/>
  );
}*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Proyecto1S />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
