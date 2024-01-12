import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const hostVanData = useOutletContext();
  return (
    <div className="hostVan--photosData">
      <img
        className="hostVan--photosData-image"
        alt={`Van ${hostVanData.name}`}
        src={hostVanData.imageUrl}
      />
    </div>
  );
}

export default HostVanPhotos;
