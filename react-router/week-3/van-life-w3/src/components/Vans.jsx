import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Vans() {
  const [vansData, setVansData] = useState([]);

  const [searchParms, setSearchParams] = useSearchParams();

  const typeFilter = searchParms.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((json) => setVansData(json.vans));
  }, []);

  const vansDataFiltered = typeFilter
    ? vansData.filter((van) => van.type === typeFilter)
    : vansData;

  const vansObjects = vansDataFiltered.map((van) => {
    return (
      <div key={van.id} className="vans--van">
        <Link to={`/vans/${van.id}`} className="vans--van-link">
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
        </Link>
      </div>
    );
  });

  return (
    <div className="vans">
      <h1 className="vans--title">Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className="van-type simple"
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className="van-type rugged"
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className="van-type luxury"
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="van-type clear-filters"
        >
          Clear filters
        </button>
      </div>
      <div className="vans--container">{vansObjects}</div>
    </div>
  );
}

export default Vans;
