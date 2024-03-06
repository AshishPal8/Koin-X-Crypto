import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const EventCaursel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-500 text-white p-2 rounded-full z-50"
      >
        <MdChevronLeft className="w-6 h-6" />
      </button>
      <div className="overflow-hidden w-full max-w-xl relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-none flex-col w-full flex items-center justify-center p-4 rounded-xl"
              style={{ backgroundColor: slide.backgroundColor }}
            >
              <div className="flex gap-3">
                <img
                  src={slide.logoSrc}
                  alt={`Slide ${index + 1}`}
                  className="max-w-full max-h-48 mb-4 rounded-full w-14 h-14"
                />
                <h3 className="text-lg font-semibold">{slide.heading}</h3>
              </div>
              <p className="text-medium text-gray-500">{slide.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-500 text-white p-2 rounded-full"
      >
        <MdChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default EventCaursel;
