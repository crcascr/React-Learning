import { useState, useEffect } from "react";

function Vans() {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((json) => setVansData(json.vans));
  }, []);

  const vansObjects = vansData.map((van) => {
    return (
      <div key={van.id} className="vans--van">
        <img
          className="vans-van-image"
          alt={`Van ${van.name}`}
          src={van.imageUrl}
        />
        <div className="vans--van-details">
          <p className="vans--van-name">{van.name}</p>
          <div className="vans--van-priceContainer">
            <p className="vans--van-price">${van.price}</p>
            <p className="vans--van-complement">/day</p>
          </div>
        </div>
        <p className={`vans--van-type ${van.type}`}>
          {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
        </p>
      </div>
    );
  });

  return (
    <div className="vans">
      <h1 className="vans--title">Explore our van options</h1>
      <div className="vans--container">{vansObjects}</div>
    </div>
  );
}

export default Vans;
