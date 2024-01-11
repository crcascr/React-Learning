import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HostVans() {
  const [hostVansData, setHostVansData] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => response.json())
      .then((json) => setHostVansData(json.vans));
  }, []);

  const hostVansObjects = hostVansData.map((van) => {
    return (
      <div key={van.id} className="hostVans--van">
        <Link to={`/host/vans/${van.id}`} className="hostVans--van-link">
          <img
            className="hostVans--van-image"
            alt={`Van ${van.name}`}
            src={van.imageUrl}
          />
          <div className="hostVans--van-details">
            <p className="hostVans--van-name">{van.name}</p>
            <p className="hostVans--van-price">${van.price}/day</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="hostVans">
      <h1 className="hostVans--title">Your listed vans</h1>
      <>{hostVansObjects}</>
    </div>
  );
}

export default HostVans;
