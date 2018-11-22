import React from "react";

import LocationButton from "../../components/LocationButton/index";
import "./style.css";

import ASQ from "../../images/ASQ.png";
import DEN from "../../images/DEN.png";
import TCN from "../../images/TCN.png";

export default props => {
  return (
    <div className="home">
      <div>
        <button
          className="button-use-my-location"
          onClick={() => handleClick(props)}
        >
          Use my current location
        </button>
      </div>
      <div className="divider" />
      <div className="button-group-label">Select your location</div>
      <div className="button-group">
        <LocationButton text="Australia Square" image={ASQ} />
        <LocationButton text="TCN Willoughby" image={TCN} />
        <LocationButton text="Dennison Street" image={DEN} />
      </div>
    </div>
  );
};

const handleClick = props => {
  console.log(props);
};
