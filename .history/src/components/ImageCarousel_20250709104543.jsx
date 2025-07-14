import React from "react";
import Slider from "react-slick";
import { Container, Typography, Button } from "@mui/material";

// ✅ Importing images
import branding1 from "../assets/branding1.jpg";
import branding2 from "../assets/branding2.jpg";
import branding3 from "../assets/branding3.jpg";

// ✅ Required styles for slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Empowering Rural Youth",
    subtitle: "Equipping future leaders through tech, training, and innovation.",
    image: branding1,
  },
  {
    title: "Skills for the Future",
    subtitle: "Jumpstart programs provide real-world opportunities and mentorship.",
    image: branding2,
  },
  {
    title: "Tech-Driven Change",
    subtitle: "Transforming communities through ICT education and outreach.",
    image: branding3,
  },
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh] md:h-[90vh] w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <Container maxWidth="md" className="text-center text-white">
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", md: "3.5rem" },
                    color: "#fea434",
                    textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
                  }}
                  className="mb-4"
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    color: "#ffffff",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
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
                    px: 4,
                    py: 1.5,
                    borderRadius: "10px",
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
