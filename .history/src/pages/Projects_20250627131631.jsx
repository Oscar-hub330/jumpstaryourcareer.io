import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Entrepreneurship Training & Support",
    description:
      "We provide mentorship and workshops for aspiring rural entrepreneurs to build business skills and confidence.",
    images: [
      "/src/assets/projects/entrepreneurship1.jpg",
      "/src/assets/projects/entrepreneurship2.jpg",
      "/src/assets/projects/entrepreneurship3.jpg",
    ],
  },
  {
    title: "Equipment Support",
    description:
      "We donate or subsidize essential tools and digital equipment to enable youth-led enterprises.",
    images: [
      "/src/assets/projects/equipment1.jpg",
      "/src/assets/projects/equipment2.jpg",
      "/src/assets/projects/equipment3.jpg",
    ],
  },
  {
    title: "Sewing Learnership",
    description:
      "Training young people in garment production, empowering them with skills for the textile and fashion sector.",
    images: [
      "/src/assets/projects/sewing1.jpg",
      "/src/assets/projects/sewing2.jpg",
      "/src/assets/projects/sewing3.jpg",
    ],
  },
  {
    title: "Poultry Production Programme",
    description:
      "Teaching youth how to manage poultry farming as a sustainable income-generating activity.",
    images: [
      "/src/assets/projects/Branding (2).jpg",
      "/src/assets/projects/poultry2.jpg",
      "/src/assets/projects/poultry3.jpg",
    ],
  },
  {
    title: "New Venture Creation",
    description:
      "We guide young innovators in launching impactful projects and startups through bootcamps and coaching.",
    images: [
      "/src/assets/projects/venture1.jpg",
      "/src/assets/projects/venture2.jpg",
      "/src/assets/projects/venture3.jpg",
    ],
  },
  {
    title: "Graduates Programme",
    description:
      "Bridging the gap between studies and employment by supporting graduates with practical skills and placements.",
    images: [
      "/src/assets/projects/graduates1.jpg",
      "/src/assets/projects/graduates2.jpg",
      "/src/assets/projects/graduates3.jpg",
    ],
  },
];

const Projects = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <Container>
        <Typography
          variant="h3"
          className="text-center text-[#fea434] font-bold mb-10"
        >
          Our Projects
        </Typography>

        <Grid container spacing={6}>
          {projects.map((project, idx) => (
            <Grid item xs={12} key={idx}>
              <Card
                sx={{
                  border: "2px solid #fea434",
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ color: "#fea434", fontWeight: 700, mb: 1 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary", mb: 2 }}
                  >
                    {project.description}
                  </Typography>

                  <Grid container spacing={2}>
                    {project.images.map((img, i) => (
                      <Grid item xs={12} sm={4} key={i}>
                        <CardMedia
                          component="img"
                          height="180"
                          image={img}
                          alt={`${project.title} proof ${i + 1}`}
                          sx={{ objectFit: "cover", borderRadius: 2 }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default Projects;
