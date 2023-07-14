import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt={`Illustration n°${currentIndex + 1}`}
        />
      </div>
      {totalImages !== 1 && (
        <div className="navigation">
          <i
            className="fa-solid fa-chevron-left fa-2xl"
            onClick={goToPrevious}
          ></i>
          <i
            className="fa-solid fa-chevron-right fa-2xl"
            onClick={goToNext}
          ></i>
        </div>
      )}

      {totalImages !== 1 && (
        <div className="image-count">{`${
          currentIndex + 1
        } / ${totalImages}`}</div>
      )}
    </div>
  );
};

export default Carousel;
