import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <h1 className="notFound--title">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/" className="notFound--button">
        Return to home
      </Link>
    </div>
  );
}

export default NotFound;
