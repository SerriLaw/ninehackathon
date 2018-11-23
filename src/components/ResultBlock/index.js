import React from "react";
import "./style.css";

import Rating from "../Rating/index";

export default ({ result }) => {
  console.log(result);
  return (
    <div className="result-block">
      <div className="result-top-row">
        <div className="result-name">{result.poi.name}</div>
        <div className="result-divider" />
        <Rating rating={result.starScore} />
      </div>

      <div className="result-mid-row">
        <div className="result-mid-row-left">
          {!!result.address && (
            <div className="result-address">
              {result.address.freeformAddress}
            </div>
          )}
          {!!result.poi.phone && (
            <div className="result-phone">Ph: {result.poi.phone}</div>
          )}
          {!!result.poi.categories && (
            <div className="result-categories">
              {`Ambience: ${result.poi.categories.join(", ")}`}
            </div>
          )}
        </div>

        {!!result.dist && (
          <div>
            <div className="result-distance">{`${Math.round(
              result.dist
            )}m away`}</div>
            <a href="/" className="result-open-map">
              Open in Google Maps
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
