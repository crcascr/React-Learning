import { NavLink } from "react-router-dom";

function NavBarHostVan() {
  return (
    <nav className="navbarHostVan">
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHostVan--link tabSelected" : "navbarHostVan--link"
        }
        to="."
        end
      >
        Details
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHostVan--link tabSelected" : "navbarHostVan--link"
        }
        to="pricing"
      >
        Pricing
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "navbarHostVan--link tabSelected" : "navbarHostVan--link"
        }
        to="photos"
      >
        Photos
      </NavLink>
    </nav>
  );
}

export default NavBarHostVan;
