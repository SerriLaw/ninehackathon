import React from "react";

import "./style.css";
import Border from "../../images/border.png";

export default () => {
  return (
    <div
      className="border"
      style={{
        backgroundImage: `url(${Border})`,
        backgroundPosition: "center bottom",
        backgroundRepeat: "repeat-x"
      }}
    />
  );
};
