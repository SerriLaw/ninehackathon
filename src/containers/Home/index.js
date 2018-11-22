import React from "react";

import LocationButton from "../../components/LocationButton/index";
import "./style.css";

export default () => {
  return (
    <div className="home">
      <div>
        <button className="button-use-my-location">
          Use my current location
        </button>
      </div>
      <div className="divider" />
      <div className="button-group-label">Select your location</div>
      <div className="button-group">
        <LocationButton text="Australia Square" />
        <LocationButton text="TCN Willoughby" />
        <LocationButton text="Dennison Street" />
      </div>
    </div>
  );
};
