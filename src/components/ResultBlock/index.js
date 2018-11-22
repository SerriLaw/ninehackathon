import React from "react";
import "./style.css";

export default props => {
  return (
    <div className="result-block">
      <div className="result-name">{props.name}</div>
      <div className="result-address">{props.address}</div>
    </div>
  );
};
