import React, { useEffect, useState, useRef, memo } from "react";
import image from "../../assets";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Slider() {
  const slides = [
    {
      url: image.slide2,
    },
    {
      url: image.slide1,
    },
    {
      url: image.slide4,
    },
    {
      url: image.slide5,
    },
    {
      url: image.slide3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      prevSlide();
    }, 4000);

    return () => {clearTimeout(timeoutRef.current);}
  });

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-[1000px] py-16 relative top-5 group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500  object-cover"
      ></div>

      {/* left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* <div className="flex top-4 justify-center py-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled/>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default memo(Slider);
