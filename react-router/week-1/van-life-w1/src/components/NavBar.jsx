import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [selectedLink, setSelectedLink] = useState(null);
  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar--home navbar--link"
        onClick={() => setSelectedLink(null)}
      >
        #VANLIFE
      </Link>
      <div className="navbar--others">
        <Link
          to="/about"
          className={`navbar--link navbar--other ${
            selectedLink === "about" ? "selected" : ""
          }`}
          onClick={() => setSelectedLink("about")}
        >
          About
        </Link>
        <Link
          to="/vans"
          className={`navbar--link navbar--other ${
            selectedLink === "vans" ? "selected" : ""
          }`}
          onClick={() => setSelectedLink("vans")}
        >
          Vans
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
