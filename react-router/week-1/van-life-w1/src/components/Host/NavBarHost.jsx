import { Link} from "react-router-dom";

function NavBarHost() {
  
  return (
    <nav className="navbarHost">
      <Link className="navbarHost--link" to="/host">Dashboard</Link>
      <Link className="navbarHost--link" to="/host/income">Income</Link>
      <Link className="navbarHost--link" to="/host/reviews">Reviews</Link>
    </nav>
  );
}

export default NavBarHost;
