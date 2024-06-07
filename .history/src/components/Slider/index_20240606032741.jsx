import React, { useEffect, useState, useRef, memo } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import image from "../../assets";  // Assuming image imports are correct.

function Slider() {
  const slides = [
    { url: image.slide2 },
    { url: image.slide1 },
    { url: image.slide4 },
    { url: image.slide5 },
    { url: image.slide3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
    timeoutRef.current = setTimeout(nextSlide, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-[500px] md:h-[700px] lg:h-[1000px] py-16 relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover sm:bg-contain sm:bg-no-repeat duration-500"
      ></div>

      {/* Left arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right arrow */}
      <div
        className="hidden group-hover:block absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center py-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`text-2xl cursor-pointer ${index === currentIndex ? 'text-black' : 'text-gray-400'}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Slider);
