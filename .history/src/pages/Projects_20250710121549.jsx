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
import Graduates1 from "../assets/graduates1.png";
import Graduates2 from "../assets/graduates2.png";
import Graduates3 from "../assets/graduates3.png";
import Entrepreneurship1 from "../assets/entrepreneurship1.png";
import Entrepreneurship2 from "../assets/entrepreneurship2.png";
import Entrepreneurship3 from "../assets/entrepreneurship3.png";
import Poulty from "../assets/poultry1.png";  

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
      "The Graduates Programme bridges the gap between academic studies and employment through hands-on experience and mentorship. It equips rural graduates with real-world skills, boosting their confidence and employability. Participants gain industry exposure, build job-ready portfolios, and access career opportunities.",
    images: [Graduates1, Graduates2, Graduates3],
  },
  {
    title: "Entrepreneurship Training & Support",
    description:
      "Empowering rural youth and graduates with the skills to build and sustain businesses. Our program covers ideation, business modeling, marketing, and financial literacy. Participants receive mentorship, startup toolkits, and links to funding opportunities.",
    images: [Entrepreneurship1, Entrepreneurship2, Entrepreneurship3],
  },
  {
    title: "Poultry Production Programme",
    description: "Blending farming with IoT to boost food security in Eastern Cape. Equipping rural communities with practical skills in sustainable poultry farming. The programme supports food security and income generation through hands-on training. Participants gain access to startup resources, veterinary guidance, and local market channels.",
    images: [PoultyP1],
  },
  {
    title: "Smart Solar Hubs",
    description: "Renewable energy stations powering rural community centers.",
    images: ["/images/project-solar.jpg"],
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #fff7f0, #fef6ee, #ffffff)",
        minHeight: "100vh",
        py: 2.5,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" mb={3}>
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
