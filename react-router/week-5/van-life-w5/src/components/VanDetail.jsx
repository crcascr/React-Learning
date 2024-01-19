import { Link, useLocation, useLoaderData } from "react-router-dom";

import backArrow from "../images/backArrow.svg";
import { getVans } from "../api";

export function loader({ params }) {
  return getVans(params.id);
}

function VanDetail() {
  const loadedData = useLoaderData();

  const vanData = loadedData;

  const location = useLocation();

  const search = location.state?.search || "";

  const searchParams = new URLSearchParams(location.state?.search || "");
  const type = searchParams.get("type");

  return vanData.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="van">
      <Link className="link--back-vans" to={`..${search}`} relative="path">
        <img className="link--back-icon" alt="Back" src={backArrow} />
        {type ? `Back to all ${type} vans` : `Back to all vans`}
      </Link>
      <img
        className="van--image"
        alt={`Van ${vanData.name}`}
        src={vanData.imageUrl}
      />
      <p className={`van--type ${vanData.type}`}>
        {vanData.type.charAt(0).toUpperCase() + vanData.type.slice(1)}
      </p>
      <div className="van--details">
        <h1 className="van--name">{vanData.name}</h1>
        <h2 className="van--price">
          ${vanData.price}
          <span className="van--price-complement">/day</span>
        </h2>
        <p className="van--description">{vanData.description}</p>
      </div>
      <Link className="link--button-van" to="/login">
        Rent this van
      </Link>
    </div>
  );
}

export default VanDetail;
