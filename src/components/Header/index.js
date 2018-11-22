import React from "react";

import logo from "../../images/logo.png";
import "./style.css";

export default () => {
  return (
    <div className="header">
      <div className="container">
        <p className="pre">caffe</p>
        <div className="logo">
          <img src={logo} alt="logo" height="50px" width="50px" />
        </div>
        <p className="post">ine</p>
      </div>
    </div>
  );
};
