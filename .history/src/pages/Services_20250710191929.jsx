import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Button,
} from "@mui/material";
import {
  Code,
  People,
  School,
  EmojiNature,
  Construction,
  Checkroom,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Software & Robotics Training",
    icon: <Code sx={{ fontSize: 40, color: "#fea434" }} />,
    description:
      "We equip youth with coding, AI, and robotics skills, preparing them for careers in the digital economy and tech innovation.",
  },
  {
    title: "Graduate Mentorship & Upskilling",
    icon: <School sx={{ fontSize: 40, color: "#fea434" }} />,
    description:
      "Bridging the gap between education and employment through practical training, internships, and industry exposure.",
  },
  {
    title: "Entrepreneurship Development",
    icon: <People sx={{ fontSize: 40, color: "#fea434" }} />,
    description:
      "From ideation to launch — our entrepreneurship support includes mentorship, business planning, and funding linkages.",
  },
  {
    title: "Poultry Farming & Agri-Tech",
    icon: <EmojiNature sx={{ fontSize: 40, color: "#fea434" }} />,
    description:
      "Empowering rural communities with sustainable poultry farming integrated with smart agriculture solutions.",
  },
  {
    title: "Equipment Support Programmes",
    icon: <Construction sx={{ fontSize: 40, color: "#fea434" }} />,
    description:
      "We provide essential tools and machinery to rural entrepreneurs, boosting productivity and market access.",
  },
  {
    title: "Sewing & Textile Learnerships",
    icon: <Checkroom sx={{ fontSize: 40, color: "#fea434" }} />,
    description:
      "Accredited sewing programmes that promote economic independence for youth and women through garment design skills.",
  },
  {
    title: "Career Development & Soft Skills",
    icon: <People sx={{ fontSize: 40, color: "#fea434" }} />,
    description:
      "Workshops on CV writing, communication, emotional intelligence, and interview preparation to improve job readiness.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #fff, #fef6ee)",
        py: 6,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" color="#fea434" mb={1}>
            Our Services
          </Typography>
          <Typography variant="body1" color="#555" maxWidth="700px" mx="auto">
            Driving transformation through technology, education, and
            entrepreneurship in underserved communities.
          </Typography>
        </Box>

        {/* Horizontal Scrollable Cards */}
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            px: 2,
            py: 2,
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 300,
                flex: "0 0 auto",
                borderRadius: 4,
                boxShadow: 3,
                textAlign: "center",
                p: 3,
                scrollSnapAlign: "start",
                transition: "0.3s ease",
                "&:hover": {
                  boxShadow: 6,
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box mb={2}>{service.icon}</Box>
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#fea434"
                  gutterBottom
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* CTA Section */}
        <Box mt={10} textAlign="center">
          <Typography variant="h4" color="#fea434" mb={2}>
            Interested in partnering or participating?
          </Typography>
          <Typography
            variant="body1"
            color="#555"
            maxWidth="600px"
            mx="auto"
            mb={4}
          >
            We’re building a future where no one is left behind.
          </Typography>
          <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
            <Button
              variant="contained"
              sx={{ bgcolor: "#fea434", px: 4 }}
              onClick={() => navigate("/contact")}
            >
              Get Involved
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "#fea434", color: "#fea434", px: 4 }}
              onClick={() => navigate("/projects")}
            >
              View Projects
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
