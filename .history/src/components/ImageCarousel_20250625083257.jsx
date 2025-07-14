import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/src/assets/gallery1.jpg",
  "/src/assets/gallery2.jpg",
  "/src/assets/gallery3.jpg",
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    arrows: false,
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-2">
      <div className="rounded-xl overflow-hidden bg-white/60 backdrop-blur-md shadow-md">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx}>
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-[220px] object-cover rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
