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
      description: "Empowering youth with hands-on training in business, tech, and life skills.",
    },
    {
      title: "Entrepreneurship Training",
      description: "Teaching problem-solving, business models, and startup methods.",
    },
    {
      title: "ICT Education",
      description: "Providing digital literacy and access to essential tech tools.",
    },
    {
      title: "Innovation",
      description: "Driving creative solutions through emerging technologies and thinking.",
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" color="#fea434" fontWeight="bold" mb={2}>
          Empowering Rural Youth
        </Typography>
        <Typography variant="body1" mb={4} maxWidth="700px" mx="auto">
          Through skills development, entrepreneurship training, and ICT education.
        </Typography>
        <Box display="flex" gap={2} justifyContent="center">
          <Button 
            variant="contained" 
            sx={{ bgcolor: '#fea434', px: 4 }}
            onClick={() => navigate("/projects")}
          >
            Explore Projects
          </Button>
          <Button 
            variant="outlined" 
            sx={{ borderColor: '#fea434', color: '#fea434', px: 4 }}
            onClick={() => navigate("/contact")}
          >
            Get Involved
          </Button>
        </Box>
      </Box>

      {/* Image Carousel + Card Side by Side */}
      <Box mb={10} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4} alignItems="stretch">
        {/* Carousel */}
        <Box flex={2} sx={{ height: { xs: 250, md: 320 }, overflow: 'hidden', borderRadius: 4, boxShadow: 3 }}>
          <ImageCarousel />
        </Box>

        {/* Info Card */}
        <Card flex={1} sx={{ border: '1px solid #fea434', borderRadius: 4, boxShadow: 2, display: 'flex', alignItems: 'center' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h5" color="#fea434" fontWeight="bold" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We empower youth with skills to thrive in business, technology, and life — transforming rural communities one step at a time.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Focus Areas */}
      <Box mb={10}>
        <Typography variant="h4" textAlign="center" color="#fea434" mb={6}>
          Our Focus Areas
        </Typography>
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }} gap={4}>
          {focusAreas.map((area, idx) => (
            <Card key={idx} sx={{ border: '1px solid #fea434', borderRadius: 2 }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h5" color="#fea434" fontWeight="600" mb={2}>
                  {area.title}
                </Typography>
                <Typography variant="body2">
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
        <Typography variant="body1" mb={4}>
          See how we're making an impact
        </Typography>

        <Button 
          variant="outlined" 
          onClick={() => setSuccessStories(generateSuccessStories(6))}
          sx={{ mb: 4, borderColor: '#fea434', color: '#fea434' }}
        >
          Generate New Stories
        </Button>

        <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }} gap={4}>
          {successStories.map((story, i) => (
            <Card key={i} sx={{ border: '1px solid #ddd', '&:hover': { borderColor: '#fea434' } }}>
              <CardContent sx={{ textAlign: 'left', p: 3 }}>
                <Typography variant="h5" color="#fea434" mb={1}>
                  {story.title}
                </Typography>
                <Typography variant="body1" mb={2}>
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

      {/* Newsletter */}
      <Box textAlign="center" p={4} bgcolor="rgba(254, 164, 52, 0.05)" borderRadius={2} border="1px solid rgba(254, 164, 52, 0.2)">
        <Typography variant="h4" color="#fea434" mb={2}>
          Stay Connected
        </Typography>
        <Typography variant="body1" mb={4} maxWidth="600px" mx="auto">
          Sign up for our newsletter to get updates.
        </Typography>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2} justifyContent="center" maxWidth="600px" mx="auto">
          <TextField 
            label="Email Address" 
            variant="outlined" 
            size="small" 
            fullWidth 
            sx={{ bgcolor: '#fff' }}
          />
          <Button variant="contained" sx={{ bgcolor: '#fea434', whiteSpace: 'nowrap' }}>
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
