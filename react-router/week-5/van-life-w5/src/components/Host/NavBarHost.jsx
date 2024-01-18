import { NavLink } from "react-router-dom";

function NavBarHost() {
  return (
    <nav className="navbarHost">
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHost--link hostSelected" : "navbarHost--link"
        }
        to="."
        end
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHost--link hostSelected" : "navbarHost--link"
        }
        to="income"
      >
        Income
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHost--link hostSelected" : "navbarHost--link"
        }
        to="vans"
      >
        Vans
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHost--link hostSelected" : "navbarHost--link"
        }
        to="reviews"
      >
        Reviews
      </NavLink>
    </nav>
  );
}

export default NavBarHost;
