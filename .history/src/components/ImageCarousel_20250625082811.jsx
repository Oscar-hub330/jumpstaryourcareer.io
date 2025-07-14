import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/src/assets/gallery1.jpg",
  "/src/assets/gallery2.jpg",
  "/src/assets/gallery3.jpg",
  "/src/assets/gallery4.jpg",
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 my-12 rounded-2xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-lg">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
