import React from "react";
import Slider from "react-slick";
import { Button, Container, Typography } from "@mui/material";

const slides = [
  {
    title: "Empowering Rural Youth",
    subtitle: "Training the next generation of tech leaders in South Africa.",
    image: "/assets/slide1.jpg",
  },
  {
    title: "Skills for Tomorrow",
    subtitle: "Workshops, coding bootcamps, and entrepreneurship programs.",
    image: "/assets/slide2.jpg",
  },
  {
    title: "Innovation Meets Opportunity",
    subtitle: "We’re building smart futures through ICT education.",
    image: "/assets/slide3.jpg",
  },
];

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[90vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <Container>
                <div className="text-white max-w-2xl">
                  <Typography
                    variant="h3"
                    className="font-bold mb-4"
                    sx={{ color: "#fea434", textShadow: "2px 2px 4px black" }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography variant="h6" className="mb-6 text-white" sx={{ textShadow: "1px 1px 2px black" }}>
                    {slide.subtitle}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#fea434",
                      color: "#fff",
                      px: 4,
                      py: 1.5,
                      borderRadius: "8px",
                      fontWeight: "bold",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
                      "&:hover": {
                        backgroundColor: "#e3942e",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </Container>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
