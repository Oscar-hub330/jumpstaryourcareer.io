import React from "react";
import Slider from "react-slick";
import { Container, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Empowering Rural Youth",
    subtitle: "Equipping future leaders through tech, training, and innovation.",
    image: "/assets/branding1.jpg",
  },
  {
    title: "Skills for the Future",
    subtitle: "Jumpstart programs provide real-world opportunities and mentorship.",
    image: "/assets/branding2.jpg",
  },
  {
    title: "Tech-Driven Change",
    subtitle: "Transforming communities through ICT education and outreach.",
    image: "/assets/branding3.jpg",
  },
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh] md:h-[90vh] w-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: "brightness(60%)",
              }}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Container maxWidth="md" className="text-center text-white px-4">
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "#fea434",
                    fontSize: { xs: "2rem", md: "3.5rem" },
                    textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
                  }}
                  className="mb-4"
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                  }}
                  className="mb-6"
                >
                  {slide.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fea434",
                    color: "#000",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#e0922c",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Container>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
