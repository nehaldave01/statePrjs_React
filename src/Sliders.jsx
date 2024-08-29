import React, { useState } from 'react';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';

const Sliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} style={{ width: '1500px', height: '600px' }} />
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Sliders;
