import React from "react";

import LocationButton from "../../components/LocationButton/index";
import "./style.css";

import ASQ from "../../images/ASQ.png";
import DEN from "../../images/DEN.png";
import TCN from "../../images/TCN.png";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
  }

  handleClick = () => {
    console.log("click");
    if (!navigator.geolocation) {
      this.handleError();
    }
    navigator.geolocation.getCurrentPosition(
      this.handleSuccess,
      this.handleError
    );
  };

  handleError = () => {
    console.log("error");
    this.setState({
      error: "Unable to use location, please select from below"
    });
  };

  handleSuccess = position => {
    console.log("success");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    this.navigate(latitude, longitude);
  };

  navigate = (lat, long) => {
    const url = `/search/lat/${lat}/lon/${long}`;
    this.props.context.push(url);
  };

  render() {
    return (
      <div className="home">
        <div>
          <button className="button-use-my-location" onClick={this.handleClick}>
            Use my current location
          </button>
          {!!this.state.error && (
            <div className="button-group-error">{this.state.error}</div>
          )}
        </div>
        <div className="divider" />
        <div className="button-group-label">Select your location</div>
        <div className="button-group">
          <LocationButton
            text="Australia Square"
            image={ASQ}
            onClick={() => this.navigate("-33.871740", "151.092170")}
          />
          <LocationButton
            text="TCN Willoughby"
            image={TCN}
            onClick={() => this.navigate("-33.809020", "151.193460")}
          />
          <LocationButton
            text="Dennison Street"
            image={DEN}
            onClick={() => this.navigate("-33.958870", "151.223360")}
          />
        </div>
      </div>
    );
  }
}
