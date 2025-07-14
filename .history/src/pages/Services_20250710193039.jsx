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
    icon: <Code sx={{ fontSize: 48, color: "#fea434" }} />,
    description:
      "We equip youth with coding, AI, and robotics skills, preparing them for careers in the digital economy and tech innovation.",
  },
  {
    title: "Graduate Mentorship & Upskilling",
    icon: <School sx={{ fontSize: 48, color: "#fea434" }} />,
    description:
      "Bridging the gap between education and employment through practical training, internships, and industry exposure.",
  },
  {
    title: "Entrepreneurship Development",
    icon: <People sx={{ fontSize: 48, color: "#fea434" }} />,
    description:
      "From ideation to launch — our entrepreneurship support includes mentorship, business planning, and funding linkages.",
  },
  {
    title: "Poultry Farming & Agri-Tech",
    icon: <EmojiNature sx={{ fontSize: 48, color: "#fea434" }} />,
    description:
      "Empowering rural communities with sustainable poultry farming integrated with smart agriculture solutions.",
  },
  {
    title: "Equipment Support Programmes",
    icon: <Construction sx={{ fontSize: 48, color: "#fea434" }} />,
    description:
      "We provide essential tools and machinery to rural entrepreneurs, boosting productivity and market access.",
  },
  {
    title: "Sewing & Textile Learnerships",
    icon: <Checkroom sx={{ fontSize: 48, color: "#fea434" }} />,
    description:
      "Accredited sewing programmes that promote economic independence for youth and women through garment design skills.",
  },
  {
    title: "Career Development & Soft Skills",
    icon: <People sx={{ fontSize: 48, color: "#fea434" }} />,
    description:
      "Workshops on CV writing, communication, emotional intelligence, and interview preparation to improve job readiness.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "radial-gradient(circle at top left, #fff9f2, #fef6ee, #fffefc)",
        py: 8,
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            fontWeight="900"
            sx={{
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #fea434 0%, #ff7e00 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              fontWeight: 900,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontSize: { xs: "2.5rem", sm: "3.5rem" },
              mb: 1,
              userSelect: "none",
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            color="#555"
            maxWidth="700px"
            mx="auto"
            sx={{ fontStyle: "italic", letterSpacing: "0.05em" }}
          >
            Driving transformation through technology, education, and
            entrepreneurship in underserved communities.
          </Typography>
        </Box>

        {/* Horizontal Scrollable Cards: right-to-left */}
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            px: 2,
            py: 4,
            scrollSnapType: "x mandatory",
            direction: "rtl",            // <-- Important for right-to-left scroll
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
            scrollBehavior: "smooth",
          }}
        >
          {/* Reverse cards so they appear correctly in RTL */}
          {[...services].reverse().map((service, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 280,
                maxWidth: 280,
                flex: "0 0 auto",
                borderRadius: 5,
                boxShadow:
                  "0 10px 30px rgba(254, 164, 52, 0.25), 0 4px 15px rgba(0,0,0,0.1)",
                textAlign: "center",
                p: 3,
                scrollSnapAlign: "start",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 360,
                cursor: "pointer",
                "&:hover": {
                  boxShadow:
                    "0 15px 40px rgba(254, 164, 52, 0.5), 0 8px 25px rgba(0,0,0,0.15)",
                  transform: "translateY(-10px) scale(1.05)",
                  background: "rgba(255, 255, 255, 0.95)",
                },
              }}
              elevation={0}
              dir="ltr"  // Fix card content direction
            >
              <Box
                sx={{
                  mb: 3,
                  display: "flex",
                  justifyContent: "center",
                  "& svg": {
                    filter:
                      "drop-shadow(0 0 4px rgba(254, 164, 52, 0.75))",
                  },
                }}
              >
                {service.icon}
              </Box>
              <CardContent sx={{ px: 0, flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight="900"
                  color="text.primary"
                  gutterBottom
                  sx={{
                    letterSpacing: "0.07em",
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                    userSelect: "none",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    userSelect: "text",
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* CTA Section */}
        <Box mt={10} textAlign="center">
          <Typography
            variant="h4"
            color="linear-gradient(90deg, #fea434, #ff7e00)"
            sx={{
              fontWeight: "bold",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              userSelect: "none",
              mb: 2,
              letterSpacing: "0.1em",
            }}
          >
            Interested in partnering or participating?
          </Typography>
          <Typography
            variant="body1"
            color="#555"
            maxWidth="600px"
            mx="auto"
            mb={4}
            sx={{ fontStyle: "italic", letterSpacing: "0.04em" }}
          >
            We’re building a future where no one is left behind.
          </Typography>
          <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#fea434",
                px: 5,
                py: 1.5,
                fontWeight: "bold",
                boxShadow: "0 6px 15px rgba(254, 164, 52, 0.7)",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "#ff7e00",
                  boxShadow: "0 10px 20px rgba(255, 126, 0, 0.9)",
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => navigate("/contact")}
            >
              Get Involved
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#fea434",
                color: "#fea434",
                px: 5,
                py: 1.5,
                fontWeight: "bold",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "rgba(254,164,52,0.1)",
                  borderColor: "#ff7e00",
                  color: "#ff7e00",
                  transform: "scale(1.05)",
                },
              }}
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
