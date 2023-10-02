import React from "react";
import App from "./Components/App";
import Navbar from "./Components/Navbar";

function ReactFacts() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <App darkMode={darkMode} />
    </div>
  );
}

export default ReactFacts;
