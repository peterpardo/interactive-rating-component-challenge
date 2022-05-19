import { useState } from "react";
import "./rating.css";

const RatingItem = ({rating, setRating, score}) => {
  const handleRating = (e) => {
    const element = e.target;
    const ratings = e.target.parentElement.childNodes;

    // Remove previous selected rating
    ratings.forEach(rating => {
      rating.classList.remove("selected");
    });

    element.classList.add("selected");
    
    setRating(element.textContent);
  }

  const handleHover = (e, action) => {
    const element = e.target;
    if (action === "on") {
      if (element.classList.contains("selected")) return;
      element.classList.add("hover-rating");
    } else {
      element.classList.remove("hover-rating");
    }
  }
  
  return (
    <div className="rating" onClick={handleRating} onMouseOver={(e) => handleHover(e, "on")} onMouseOut={(e) => handleHover(e, "off")}>{score}</div>
  )
}

export default RatingItem