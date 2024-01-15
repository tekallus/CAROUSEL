import React, { useState } from "react";

const images = [
  "img/Resim1.png",
  "img/Resim2.png",
  "img/Resim3.png",
  "img/Resim4.jpg",
  "img/Resim5.png"
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPreviousImage}>Geri</button>
      <img
        src={images[currentImageIndex]}
        alt={`Resim ${currentImageIndex + 1}`}
      />
      <button onClick={goToNextImage}>İleri</button>
    </div>
  );
}

export default Carousel;
