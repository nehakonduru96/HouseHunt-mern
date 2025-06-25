import React, { useState } from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg', alt: 'Slide One' },
    { id: 2, image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg', alt: 'Slide Two' },
    { id: 3, image: 'https://cdn.pixabay.com/photo/2022/11/24/17/31/house-7614753_1280.jpg', alt: 'Slide Three' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full overflow-hidden h-96">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-96 flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10" onClick={handlePrev}>
        &#9664;
      </button>
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10" onClick={handleNext}>
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
