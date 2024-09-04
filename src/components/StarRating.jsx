import React from "react";

export const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="star full">
          ★
        </span>
      ))}
      {halfStar && <span className="star half">★</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="star empty">
          ☆
        </span>
      ))}
    </div>
  );
};

export default StarRating;
