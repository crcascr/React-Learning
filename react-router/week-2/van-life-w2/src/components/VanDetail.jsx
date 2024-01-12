import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import backArrow from "../images/backArrow.svg";

function VanDetail() {
  const params = useParams();
  const [vanData, setVanData] = useState([]);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((json) => setVanData(json.vans));
  }, []);

  return vanData.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="van">
      <Link className="link--back-vans" to="/vans">
        <img className="link--back-icon" alt="Back" src={backArrow} />
        Back to all vans
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
