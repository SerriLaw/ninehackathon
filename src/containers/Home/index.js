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
      error: "",
      inputValue: ""
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

  handleSearch = () => {
    const url = `/find/${this.state.inputValue}`;
    this.props.context.push(url);
  };

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  navigate = (lat, long, place) => {
    const url = `/search/lat/${lat}/lon/${long}?place=${place}`;
    this.props.context.push(url);
  };

  render() {
    return (
      <div className="home">
        <div className="button-group-label">Select your location</div>
        <div className="button-group">
          <LocationButton
            text="Australia Square"
            image={ASQ}
            onClick={() =>
              this.navigate("-33.864620", "151.207400", "Australia Square")
            }
          />
          <LocationButton
            text="TCN Willoughby"
            image={TCN}
            onClick={() =>
              this.navigate("-33.8113398", "151.1967618", "TCN Willoughby")
            }
          />
          <LocationButton
            text="Dennison Street"
            image={DEN}
            onClick={() =>
              this.navigate("-33.958870", "151.223360", "Dennison Street")
            }
          />
        </div>
        <div className="divider" />
        <div>
          <input
            placeholder="Find a cafe"
            className="button-input"
            id="search"
            onChange={evt => this.updateInputValue(evt)}
          />
          <button className="button-search" onClick={this.handleSearch}>
            Search
          </button>
          <button className="button-use-my-location" onClick={this.handleClick}>
            Use my current location
          </button>
          {!!this.state.error && (
            <div className="button-group-error">{this.state.error}</div>
          )}
        </div>
      </div>
    );
  }
}
