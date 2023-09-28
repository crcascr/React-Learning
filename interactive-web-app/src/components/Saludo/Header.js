import React from "react";

function Header() {
  const [user, setUser] = React.useState("Joe");
  return (
    <header>
      <p>Current user: {user}</p>
    </header>
  );
}

export default Header;
