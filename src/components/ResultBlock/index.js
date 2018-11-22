import React from "react";
import "./style.css";

export default ({ result }) => {
  console.log(result);
  return (
    <div className="result-block">
      <div className="result-top-row">
        <div className="result-name">{result.poi.name}</div>
        <div className="result-divider" />
        <div className="result-sentiment">{result.sentiment || "4"}</div>
      </div>

      <div className="result-mid-row">
        <div className="result-mid-row-left">
          <div className="result-address">{result.address.freeformAddress}</div>
          <div className="result-phone">Ph: {result.poi.phone}</div>
          <div className="result-categories">
            {`Ambience: ${result.poi.categories.join(", ")}`}
          </div>
        </div>

        <div className="result-distance">{`${Math.round(
          result.dist
        )}m away`}</div>
      </div>
    </div>
  );
};
