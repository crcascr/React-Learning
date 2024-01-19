import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";

export function loader() {
  return getHostVans();
}

function HostVans() {
  const loadedData = useLoaderData();

  const hostVansData = loadedData;

  const hostVansObjects = hostVansData.map((van) => {
    return (
      <div key={van.id} className="hostVans--van">
        <Link to={van.id} className="hostVans--van-link">
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

  return hostVansData.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="hostVans">
      <h1 className="hostVans--title">Your listed vans</h1>
      <>{hostVansObjects}</>
    </div>
  );
}

export default HostVans;
