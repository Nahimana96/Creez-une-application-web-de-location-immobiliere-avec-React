import React, { useEffect, useState } from "react";

const Ratings = ({ rating }) => {
  const [currentRating, updateRating] = useState(0);

  useEffect(() => {
    updateRating(rating);
  }, [rating]);
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <i
          className={`fa-solid fa-star ${
            index < currentRating ? "rose" : "gris"
          }`}
        ></i>
      ))}
    </div>
  );
};

export default Ratings;
