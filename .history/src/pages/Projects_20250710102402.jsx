import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Local assets
import ContractSigning from "../assets/contractsigning.png";
import ContractSigning2 from "../assets/contractsigning2.png";
import ContractSigning3 from "../assets/contractsigning3.png";

const projects = [
  {
    title: "Software & Robotics Development Programme",
    description:
      "We’re training 200 rural innovators from Maganduzweni and Pienaar in full-stack development, mobile apps, and robotics. This equips youth to launch startups and drive digital innovation in their communities.",
    images: [ContractSigning, ContractSigning2, ContractSigning3],
  },
  {
    title: "Graduates Programme",
    description:
      "Bridging the gap between studies and employment by supporting graduates practical skills and placements.",
    image: "/images/project-robotics.jpg",
  },
  {
    title: "Digital Literacy for Girls",
    description:
      "Providing essential digital skills to young women in KwaZulu-Natal.",
    image: "/images/project-girls-tech.jpg",
  },
  {
    title: "Agri-Tech Incubation",
    description: "Blending farming with IoT to boost food security in Eastern Cape.",
    image: "/images/project-agritech.jpg",
  },
  {
    title: "Smart Solar Hubs",
    description: "Renewable energy stations powering rural community centers.",
    image: "/images/project-solar.jpg",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #fff7f0, #fef6ee, #ffffff)",
        minHeight: "100vh",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" mb={2}>
          <Typography variant="h3" fontWeight="bold" color="#fea434" mb={1}>
            Our Projects
          </Typography>
          <Typography variant="body1" color="#555" maxWidth="700px" mx="auto">
            Discover how Jumpstart is changing lives through innovation,
            education, and sustainable technology in rural communities.
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    color="#fea434"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {project.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {project.description}
                  </Typography>

                  {/* Multiple images in horizontal layout */}
                  {project.images && (
                    <Box display="flex" justifyContent="space-between" mt={2}>
                      {project.images.map((img, i) => (
                        <CardMedia
                          key={i}
                          component="img"
                          image={img}
                          alt={`${project.title} - ${i}`}
                          sx={{
                            width: "32%",
                            height: "120px",
                            borderRadius: 2,
                            objectFit: "cover",
                            flexShrink: 0,
                            border: "1px solid #eee",
                          }}
                        />
                      ))}
                    </Box>
                  )}

                  {/* Fallback single image */}
                  {project.image && (
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        mt: 2,
                        height: 180,
                        borderRadius: 2,
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box mt={10} textAlign="center">
          <Typography variant="h4" color="#fea434" mb={2}>
            Want to support or join a project?
          </Typography>
          <Typography
            variant="body1"
            color="#555"
            maxWidth="600px"
            mx="auto"
            mb={4}
          >
            We’re looking for collaborators, volunteers, and donors who want to
            make a lasting impact.
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
              onClick={() => navigate("/about")}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
