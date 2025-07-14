import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Skills Development",
    description:
      "Hands-on training in business, tech, and life skills tailored to rural youth.",
  },
  {
    title: "Entrepreneurship Training",
    description:
      "Workshops on problem-solving, lean startup methods, and sustainable business models.",
  },
  {
    title: "ICT Education",
    description:
      "Access to digital literacy training, tools, and internet connectivity.",
  },
  {
    title: "Innovation Labs",
    description:
      "Creative spaces for youth to explore robotics, AI, and future-focused technologies.",
  },
];

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-black min-h-screen flex flex-col">
      {/* 🔳 Background Image Blur */}
      <div
        className="absolute inset-0 z-0 filter blur-sm scale-105"
        style={{
          backgroundImage: `url('/src/assets/car.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      {/* 🔳 Main Content */}
      <div className="relative z-10 py-20 px-4">
        <Container maxWidth="lg">
          <Box className="text-center mb-12">
            <Typography
              variant="h3"
              component="h1"
              className="font-bold text-[#fea434] mb-4"
            >
              Our Services
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-700 max-w-2xl mx-auto"
            >
              We offer a variety of programs aimed at empowering youth through
              innovation, digital literacy, and entrepreneurship.
            </Typography>
          </Box>

          {/* 🔳 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Box
                key={index}
                className="border-2 border-[#fea434] rounded-2xl p-6 bg-white/90 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Typography
                  variant="h6"
                  className="text-[#fea434] font-semibold mb-2"
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" className="text-gray-700">
                  {service.description}
                </Typography>
              </Box>
            ))}
          </div>

          <Box className="flex justify-center mt-12">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fea434",
                color: "white",
                px: 4,
                "&:hover": { backgroundColor: "#e69420" },
              }}
              onClick={() => navigate("/contact")}
            >
              Get Involved
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Service;
