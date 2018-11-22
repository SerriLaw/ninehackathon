import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import "./style.css";

export default () => {
  return (
    <div className="header">
      <Link to="/" className="clicky">
        <p className="pre">caffe</p>
        <div className="logo">
          <img src={logo} alt="logo" height="50px" width="50px" />
        </div>
        <p className="post">ine</p>
      </Link>
    </div>
  );
};
