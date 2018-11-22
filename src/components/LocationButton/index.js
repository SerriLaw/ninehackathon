import React from "react";

import "./style.css";

export default props => {
  return (
    <button className="location-button" onClick={props.onClick}>
      <img src={props.image} className="location-image" alt={props.text} />
      <p className="location-text">{props.text}</p>
    </button>
  );
};
