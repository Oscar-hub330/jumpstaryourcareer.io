import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Footer from "../components/Footer";

const servicesData = [
  {
    title: "ENTREPRENEURSHIP TRAINING & SUPPORT",
    description:
      "Equipping youth with the skills, tools, and mentorship needed to start and grow small businesses in their local communities.",
    images: [
      "/src/assets/services/entrepreneurship1.jpg",
      "/src/assets/services/entrepreneurship2.jpg",
      "/src/assets/services/entrepreneurship3.jpg",
    ],
  },
  {
    title: "EQUIPMENT SUPPORT",
    description:
      "Providing access to essential tools and digital devices to support educational and entrepreneurial goals.",
    images: [
      "/src/assets/services/equipment1.jpg",
      "/src/assets/services/equipment2.jpg",
      "/src/assets/services/equipment3.jpg",
    ],
  },
  {
    title: "SEWING LEARNERSHIP",
    description:
      "Hands-on training in sewing and tailoring, enabling learners to create and sell garments independently.",
    images: [
      "/src/assets/services/sewing1.jpg",
      "/src/assets/services/sewing2.jpg",
      "/src/assets/services/sewing3.jpg",
    ],
  },
  {
    title: "POULTRY PRODUCTION PROGRAMME",
    description:
      "Training in poultry farming and sustainable food production to create employment and food security.",
    images: [
      "/src/assets/services/poultry1.jpg",
      "/src/assets/services/poultry2.jpg",
      "/src/assets/services/poultry3.jpg",
    ],
  },
  {
    title: "NEW VENTURE CREATION",
    description:
      "Helping aspiring entrepreneurs identify viable business ideas and turn them into operational ventures.",
    images: [
      "/src/assets/services/venture1.jpg",
      "/src/assets/services/venture2.jpg",
      "/src/assets/services/venture3.jpg",
    ],
  },
  {
    title: "GRADUATES PROGRAMME",
    description:
      "Bridging the gap between academic achievement and employment through practical experience and mentorship.",
    images: [
      "/src/assets/services/graduates1.jpg",
      "/src/assets/services/graduates2.jpg",
      "/src/assets/services/graduates3.jpg",
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <Container>
        <Typography variant="h3" className="text-center text-[#fea434] font-bold mb-12">
          Our Services
        </Typography>

        {servicesData.map((service, index) => (
          <Card
            key={index}
            className="mb-12 shadow-lg border"
            sx={{ borderColor: "#fea434", borderRadius: 3 }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ color: "#fea434", fontWeight: 600 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" className="text-gray-700 mb-4">
                {service.description}
              </Typography>
              <Grid container spacing={2}>
                {service.images.map((img, i) => (
                  <Grid item xs={12} sm={4} key={i}>
                    <CardMedia
                      component="img"
                      image={img}
                      alt={service.title + " proof " + (i + 1)}
                      sx={{ height: 200, borderRadius: 2, objectFit: "cover" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
