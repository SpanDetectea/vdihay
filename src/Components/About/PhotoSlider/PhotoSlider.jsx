import React, { useState } from "react";
import "./PhotoSlider.scss";

const PhotoSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <div className="slider__window">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`slider__image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <button className="slider__btn left" onClick={goToPrev}>
        &#10094;
      </button>
      <button className="slider__btn right" onClick={goToNext}>
        &#10095;
      </button>
      <div className="slider__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider__dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
