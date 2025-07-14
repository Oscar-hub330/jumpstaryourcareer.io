import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  Box,
  TextField,
  Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

// Utility to generate mock success stories
const generateSuccessStories = (count = 6) => {
  const locations = ['Limpopo', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
  const names = ['Thabo', 'Nomsa', 'Sipho', 'Lerato', 'Mpho', 'Bongani'];
  const businessTypes = ['tech startup', 'agricultural business', 'online store'];
  const skills = ['web development', 'digital marketing', 'coding'];
  const impacts = [
    'created 3 local jobs',
    'increased income by 200%',
    'trained 50 community members'
  ];

  const stories = [];
  for (let i = 0; i < count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const business = businessTypes[Math.floor(Math.random() * businessTypes.length)];
    const skill = skills[Math.floor(Math.random() * skills.length)];
    const impact = impacts[Math.floor(Math.random() * impacts.length)];

    const templates = [
      `${name} from ${location} launched a ${business} after our ${skill} program`,
      `After learning ${skill}, ${name} started a ${business} that ${impact}`,
      `${name}'s ${business} ${impact} after our training`
    ];

    const title = `${name}'s Success`;
    const description = templates[Math.floor(Math.random() * templates.length)];

    stories.push({
      title: title.charAt(0).toUpperCase() + title.slice(1),
      description: description.charAt(0).toUpperCase() + description.slice(1),
      impact: impact.charAt(0).toUpperCase() + impact.slice(1),
    });
  }

  return stories;
};

const Home = () => {
  const navigate = useNavigate();
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    setSuccessStories(generateSuccessStories(6));
  }, []);

  const focusAreas = [
    {
      title: "Skills Development",
      description: "Empowering youth with hands-on training in technology and life skills.",
    },
    {
      title: "Entrepreneurship Training",
      description: "Training rural youth in problem-solving, business models and business packages.",
    },
    {
      title: "Digital Skills",
      description: "Delivering digital literacy, AI, and robotics education to close digital divides, cultivate future-ready talent, and accelerate innovation through emerging technologies.",
    },
    {
      title: "Renewable & Clean Energy",
      description: "Offering rural youth courses on clean energy.",
    },
    {
      title: "Career Development",
      description: "Strengthening career development to expose rural learners to diverse opportunities beyond traditional roles.",
    },
    {
      title: "Work Placement / Vocational Training",
      description: "Providing graduates with job-readiness and real-world experience.",
    },
    {
      title: "Youth Center",
      description: "We provide internet access and life skills training to rural communities.",
    },
  ];

  const futuristicBg =
    "linear-gradient(135deg, #f4f8ff, #e5edff, #d8e5ff, #e0ecff)";

  const cardGradient =
    "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,250,255,0.92))";

  return (
    <div
      style={{
        background: futuristicBg,
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        paddingBottom: "3rem",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Hero Section */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" color="#fea434" fontWeight="bold" mb={2}>
            Empowering Rural Youth
          </Typography>
          <Typography
            variant="body1"
            mb={4}
            maxWidth="700px"
            mx="auto"
            color="#444"
          >
            Through skills development, entrepreneurship training, and ICT education.
          </Typography>
          <Box display="flex" gap={2} justifyContent="center">
            <Button
              variant="contained"
              sx={{ bgcolor: "#fea434", px: 4 }}
              onClick={() => navigate("/projects")}
            >
              Explore Projects
            </Button>
            <Button
              variant="outlined"
              sx={{ borderColor: "#fea434", color: "#fea434", px: 4 }}
              onClick={() => navigate("/contact")}
            >
              Get Involved
            </Button>
          </Box>
        </Box>

        {/* Carousel */}
        <Box mb={10}>
          <ImageCarousel />
        </Box>

        {/* Focus Areas */}
        <Box mb={10}>
          <Typography variant="h4" textAlign="center" color="#fea434" mb={6}>
            Our Focus Areas
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }}
            gap={4}
          >
            {focusAreas.map((area, idx) => (
              <Card
                key={idx}
                sx={{
                  background: cardGradient,
                  border: "1px solid #fea434",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Typography variant="h5" color="#fea434" fontWeight="600" mb={2}>
                    {area.title}
                  </Typography>
                  <Typography variant="body2" color="#444">
                    {area.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Success Stories */}
        <Box mb={10} textAlign="center">
          <Typography variant="h4" color="#fea434" mb={2}>
            Success Stories
          </Typography>
          <Typography variant="body1" mb={4} color="#555">
            See how we're making an impact
          </Typography>

          <Button
            variant="outlined"
            onClick={() => setSuccessStories(generateSuccessStories(6))}
            sx={{ mb: 4, borderColor: "#fea434", color: "#fea434" }}
          >
            Generate New Stories
          </Button>

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }}
            gap={4}
          >
            {successStories.map((story, i) => (
              <Card
                key={i}
                sx={{
                  background: cardGradient,
                  border: "1px solid #ddd",
                  "&:hover": { borderColor: "#fea434" },
                  boxShadow: 2,
                }}
              >
                <CardContent sx={{ textAlign: "left", p: 3 }}>
                  <Typography variant="h5" color="#fea434" mb={1}>
                    {story.title}
                  </Typography>
                  <Typography variant="body1" mb={2} color="#333">
                    {story.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body2" color="#fea434">
                    Impact: {story.impact}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Newsletter Signup */}
        <Box
          textAlign="center"
          p={4}
          sx={{
            background: cardGradient,
            borderRadius: 2,
            border: "1px solid rgba(254, 164, 52, 0.2)",
            boxShadow: 2,
          }}
        >
          <Typography variant="h4" color="#fea434" mb={2}>
            Stay Connected
          </Typography>
          <Typography
            variant="body1"
            mb={4}
            maxWidth="600px"
            mx="auto"
            color="#555"
          >
            Sign up for our newsletter to get updates.
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            gap={2}
            justifyContent="center"
            maxWidth="600px"
            mx="auto"
          >
            <TextField
              label="Email Address"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ bgcolor: "#fff" }}
            />
            <Button
              variant="contained"
              sx={{ bgcolor: "#fea434", whiteSpace: "nowrap" }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
