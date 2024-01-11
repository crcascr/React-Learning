import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import backArrow from "../../images/backArrow.svg";

function HostVanDetail() {
  const params = useParams();
  const [hostVanData, setHostVanData] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((response) => response.json())
      .then((json) => setHostVanData(json.vans[0]));
  }, []);

  return hostVanData.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="hostVan">
      <Link className="link--back-vans" to=".." relative="path">
        <img className="link--back-icon" alt="Back" src={backArrow} />
        Back to all vans
      </Link>
      <div className="hostVan--container">
        <div className="hostVan--basicData">
          <img
            className="hostVan--image"
            alt={`Van ${hostVanData.name}`}
            src={hostVanData.imageUrl}
          />
          <div className="hostVan--basicData-details">
            <p className={`hostVan--type ${hostVanData.type}`}>
              {hostVanData.type.charAt(0).toUpperCase() +
                hostVanData.type.slice(1)}
            </p>
            <h2 className="hostVan--name">{hostVanData.name}</h2>
            <h2 className="hostVan--price">
              ${hostVanData.price}
              <span className="hostVan--price-complement">/day</span>
            </h2>
          </div>
        </div>
        <div className="hostVan--extraData">
          <p className="hostVan--extraData-title">
            Name:{" "}
            <span className="hostVan--extraData-data">{hostVanData.name}</span>
          </p>
          <p className="hostVan--extraData-title">
            Category:{" "}
            <span className="hostVan--extraData-data">
              {hostVanData.type.charAt(0).toUpperCase() +
                hostVanData.type.slice(1)}
            </span>
          </p>
          <p className="hostVan--extraData-title">
            Description:{" "}
            <span className="hostVan--extraData-data">
              {hostVanData.description}
            </span>
          </p>
          <p className="hostVan--extraData-title">
            Visibility:{" "}
            <span className="hostVan--extraData-data">Public</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HostVanDetail;
