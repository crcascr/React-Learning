import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const hostVanData = useOutletContext();
  return (
    <div className="hostVan--extraData">
      <p className="hostVan--extraData-title">
        Name:{" "}
        <span className="hostVan--extraData-data">{hostVanData.name}</span>
      </p>
      <p className="hostVan--extraData-title">
        Category:{" "}
        <span className="hostVan--extraData-data">
          {hostVanData.type.charAt(0).toUpperCase() + hostVanData.type.slice(1)}
        </span>
      </p>
      <p className="hostVan--extraData-title">
        Description:{" "}
        <span className="hostVan--extraData-data">
          {hostVanData.description}
        </span>
      </p>
      <p className="hostVan--extraData-title">
        Visibility: <span className="hostVan--extraData-data">Public</span>
      </p>
    </div>
  );
}

export default HostVanInfo;
