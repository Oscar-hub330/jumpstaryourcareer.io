import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/src/assets/jump.svg",
  "/src/assets/car.svg",
  "/src/assets/jumpstart-logo.svg",
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Smoother fade transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500, // Slower slide interval
    fade: true,
    arrows: false,
    cssEase: "ease-in-out", // Smooth easing effect
  };

  return (
    <div className="max-w-4xl w-full mx-auto px-4 py-6 z-10 relative">
      <div className="rounded-2xl overflow-hidden shadow-xl bg-white/60 backdrop-blur-md">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="w-full h-[150px] md:h-[320px]">
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-contain transition-all duration-1000 ease-in-out"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;