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

// ✅ Local images (from src/assets)
import ContractSigning from "../assets/contractsigning.png";
import ContractSigning2 from "../assets/contractsigning2.png";
import ContractSigning3 from "../assets/contractsigning3.png";

// ✅ If you're using public/images/ folder, these can stay as-is
// If not, you need to import them as well like above
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
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" color="#fea434" mb={2}>
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
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={
                    project.image
                      ? project.image
                      : project.images && project.images.length > 0
                      ? project.images[0]
                      : ""
                  }
                  alt={project.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    color="#fea434"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
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
