import React from "react";
import "./Saludo.css";
import Header from "./Header";
import Body from "./Body";

function Saludo() {
    const [user, setUser] = React.useState("Joe");
  return (
    <main className="mainSaludo">
      <Header usuario={user}/>
      <Body usuario={user}/>
    </main>
  );
}

export default Saludo
