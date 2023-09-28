import React from "react";

function Header(props) {
  
  return (
    <header>
      <p>Current user: {props.usuario}</p>
    </header>
  );
}

export default Header;
