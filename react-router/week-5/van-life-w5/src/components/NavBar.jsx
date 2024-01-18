import { NavLink } from "react-router-dom";
import userCircle from "../images/userCircle.svg";

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <NavLink to="/" className="navbar--home navbar--link">
          #VANLIFE
        </NavLink>
        <div className="navbar--others">
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive
                ? "navbar--link navbar--other selected"
                : "navbar--link navbar--other"
            }
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "navbar--link navbar--other selected"
                : "navbar--link navbar--other"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              isActive
                ? "navbar--link navbar--other selected"
                : "navbar--link navbar--other"
            }
          >
            Vans
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "navbar--link navbar--other navbar--login selected"
                : "navbar--link navbar--other navbar--login"
            }
          >
            <img src={userCircle} className="navbar--login-icon" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
