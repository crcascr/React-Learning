import { NavLink } from "react-router-dom";
import userCircle from "../images/userCircle.svg";
import userCircleUnselected from "../images/userCircleUnselected.svg";

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
            className="navbar--link navbar--other navbar--login"
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? userCircle : userCircleUnselected}
                  alt="Login"
                  className="navbar--login-icon"
                />
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
