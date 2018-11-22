import React from "react";

import logo from "../../images/logo.png";
import "./style.css";

export default () => {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
};
