import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, Container } from "@mui/material";
import branding1 from "../assets/branding1.jpg";
import branding2 from "../assets/branding2.jpg";
import branding3 from "../assets/branding3.jpg";

const images = [
  {
    src: branding1,
    title: "Building Future Leaders",
    subtitle: "Empowering youth with technology and entrepreneurship.",
  },
  {
    src: branding2,
    title: "From Idea to Impact",
    subtitle: "See how rural innovation is transforming communities.",
  },
  {
    src: branding3,
    title: "Skills for a Better Tomorrow",
    subtitle: "Learn. Create. Succeed.",
  },
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Box sx={{ position: "relative", width: "100%", height: "450px", borderRadius: 2, overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              height: "450px",
              width: "100%",
              position: "relative",
            }}
          >
            {/* Background Image */}
            <Box
              component="img"
              src={item.src}
              alt={item.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.75)",
              }}
            />

            {/* Overlay Content */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                px: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h3" fontWeight="bold" mb={2}>
                {item.title}
              </Typography>
              <Typography variant="h6" maxWidth="700px" mb={3}>
                {item.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#fea434",
                  color: "#fff",
                  fontWeight: 600,
                  px: 4,
                  "&:hover": { bgcolor: "#e1912d" },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
