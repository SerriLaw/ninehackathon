import React from "react";

import "./style.css";

export default props => {
  return (
    <div className="location-button">
      <img src={props.image} className="location-image" alt={props.text} />
      <p className="location-text">{props.text}</p>
    </div>
  );
};
