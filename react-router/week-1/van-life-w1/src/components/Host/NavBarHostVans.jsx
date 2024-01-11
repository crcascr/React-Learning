import { NavLink } from "react-router-dom";

function NavBarHost() {
  return (
    <nav className="navbarHost">
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHost--link hostSelected" : "navbarHost--link"
        }
        to="/host/vans/:id"
        end
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHost--link hostSelected" : "navbarHost--link"
        }
        to="/host/income"
      >
        Income
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHost--link hostSelected" : "navbarHost--link"
        }
        to="/host/vans"
      >
        Vans
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHost--link hostSelected" : "navbarHost--link"
        }
        to="/host/reviews"
      >
        Reviews
      </NavLink>
    </nav>
  );
}

export default NavBarHost;
