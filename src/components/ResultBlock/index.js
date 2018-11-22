import React from "react";
import "./style.css";

export default ({ result }) => {
  console.log(result);
  return (
    <div className="result-block">
      {/* <div className="result-name">{result.toS}</div>
      <div className="result-address">{result.address}</div> */}
    </div>
  );
};
