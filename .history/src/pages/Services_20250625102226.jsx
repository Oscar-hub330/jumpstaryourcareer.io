import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Skills Development",
    desc: "Providing practical training in ICT, business, and soft skills to empower youth.",
  },
  {
    title: "Entrepreneurship Support",
    desc: "Helping youth develop sustainable business ideas and access mentorship.",
  },
  {
    title: "Job Readiness",
    desc: "Preparing young people for employment through CV writing, interviews, and work ethics.",
  },
  {
    title: "Digital Literacy",
    desc: "Enabling access to digital tools and training in computer basics and internet use.",
  },
];

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 bg-white">
      <Container maxWidth="lg">
        {/* Page Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          className="text-[#fea434] font-bold"
        >
          Our Services
        </Typography>

        {/* Intro Description */}
        <Typography
          variant="body1"
          align="center"
          className="text-gray-700 mb-10 max-w-2xl mx-auto"
        >
          We offer a wide range of services to equip rural youth with the skills,
          confidence, and opportunities they need to succeed in life and work.
        </Typography>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Box
              key={idx}
              className="border-2 border-[#fea434] bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Typography
                variant="h6"
                className="text-[#fea434] font-semibold mb-2"
              >
                {service.title}
              </Typography>
              <Typography variant="body2" className="text-gray-700">
                {service.desc}
              </Typography>
            </Box>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex justify-center">
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
        </div>
      </Container>
    </div>
  );
};

export default Service;
