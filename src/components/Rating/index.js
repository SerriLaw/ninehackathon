import React from "react";
import { Link } from "react-router-dom";

import full from "../../images/full.png";
import half from "../../images/half.png";
import empty from "../../images/empty.png";
import "./style.css";

export default ({ rating }) => {
  let ratingArr = [];
  const roundRating = Math.floor(rating);
  {
    let halfed = false;
    for (let index = 1; index < 6; index++) {
      if (index <= roundRating) {
        ratingArr.push(full);
      } else {
        if (roundRating < rating && !halfed) {
          ratingArr.push(half);
          halfed = true;
        } else {
          ratingArr.push(empty);
        }
      }
    }
  }

  return (
    <div className="rating">
      {ratingArr.map((x, index) => {
        return <img src={x} alt="cup" key={index} className="rating-icon" />;
      })}
    </div>
  );
};
