import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const hostVanData = useOutletContext();
  return (
    <div className="hostVan--pricingData">
      <h2 className="hostVan--pricingData-price">
        ${hostVanData.price.toFixed(2)}
        <span className="hostVan--price-complement">/day</span>
      </h2>
    </div>
  );
}

export default HostVanPricing;
