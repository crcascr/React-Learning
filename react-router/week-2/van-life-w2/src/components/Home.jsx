import homeImage from "../images/homeImage.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <img className="home--image" alt="Home" src={homeImage} />
      <div className="home--textContainer">
        <h1 className="home--title">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home--description">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <Link className="link--button-home" to="/vans">
          Find your van
        </Link>
      </div>
    </div>
  );
}

export default Home;
