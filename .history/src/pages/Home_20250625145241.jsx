import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  Box,
  TextField,
  Divider,
  useTheme
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import ImageCarousel from "../components/ImageCarousel";

// Success Story Generator
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

  return Array.from({ length: count }, () => {
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
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      title: `${name}'s Success Story`,
      description: templates[Math.floor(Math.random() * templates.length)],
      impact: impact.charAt(0).toUpperCase() + impact.slice(1),
      icon: '🌟'
    };
  });
};

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    setSuccessStories(generateSuccessStories(6));
  }, []);

  const focusAreas = [
    {
      title: "Skills Development",
      description: "Empowering youth with hands-on training in business, tech, and life skills.",
      icon: "🎯"
    },
    {
      title: "Entrepreneurship Training",
      description: "Teaching problem-solving, business models, and startup methods.",
      icon: "💡"
    },
    {
      title: "ICT Education",
      description: "Providing digital literacy and access to essential tech tools.",
      icon: "💻"
    },
    {
      title: "Innovation",
      description: "Driving creative solutions through emerging technologies and thinking.",
      icon: "🚀"
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 6, px: { xs: 3, md: 4 } }}>
      {/* Hero Section */}
      <Box sx={{ 
        textAlign: 'center',
        mb: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Logo with perfect centering */}
        <Box sx={{ 
          width: 120,
          height: 120,
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={JumpstartLogo}
            alt="Jumpstart Logo"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Box>
        
        {/* Headline with consistent spacing */}
        <Typography variant="h2" sx={{ 
          color: '#fea434',
          fontWeight: 700,
          mb: 3,
          fontSize: { xs: '2.2rem', md: '2.8rem' },
          lineHeight: 1.2,
          maxWidth: '800px'
        }}>
          Empowering Rural Youth
        </Typography>
        
        {/* Subheading with controlled width */}
        <Typography variant="h5" sx={{ 
          color: 'text.secondary',
          mb: 5,
          maxWidth: '700px',
          fontSize: { xs: '1.1rem', md: '1.25rem' },
          lineHeight: 1.6
        }}>
          Through skills development, entrepreneurship training, and ICT education.
        </Typography>
        
        {/* Buttons with consistent sizing */}
        <Box sx={{ 
          display: 'flex',
          gap: 3,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/projects")}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              bgcolor: '#fea434',
              '&:hover': { bgcolor: '#e69420' }
            }}
          >
            Explore Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate("/contact")}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderWidth: 2,
              borderColor: '#fea434',
              color: '#fea434',
              '&:hover': {
                borderWidth: 2,
                borderColor: '#e69420',
                color: '#e69420',
                bgcolor: 'rgba(254, 164, 52, 0.08)'
              }
            }}
          >
            Get Involved
          </Button>
        </Box>
      </Box>

      {/* Carousel */}
      <Box sx={{ mb: 10 }}>
        <ImageCarousel />
      </Box>

      {/* Focus Areas - Cards with equal height */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ 
          textAlign: 'center',
          mb: 6,
          fontWeight: 700,
          color: '#fea434'
        }}>
          Our Focus Areas
        </Typography>
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
          gap: 4
        }}>
          {focusAreas.map((area, idx) => (
            <Card key={idx} sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid #fea434',
              borderRadius: 2,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <CardContent sx={{ 
                p: 4,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <Typography sx={{ 
                  fontSize: '3.5rem',
                  mb: 2,
                  lineHeight: 1
                }}>
                  {area.icon}
                </Typography>
                <Typography variant="h5" sx={{ 
                  mb: 2,
                  fontWeight: 600,
                  color: '#fea434'
                }}>
                  {area.title}
                </Typography>
                <Typography variant="body1">
                  {area.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Success Stories - Uniform card heights */}
      <Box sx={{ mb: 10 }}>
        <Typography variant="h3" sx={{ 
          textAlign: 'center',
          mb: 2,
          fontWeight: 700,
          color: '#fea434'
        }}>
          Success Stories
        </Typography>
        
        <Typography variant="h5" sx={{ 
          textAlign: 'center',
          mb: 4,
          color: 'text.secondary'
        }}>
          See how we're making an impact
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Button
            variant="outlined"
            onClick={() => setSuccessStories(generateSuccessStories(6))}
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderWidth: 2,
              borderColor: '#fea434',
              color: '#fea434',
              '&:hover': {
                borderWidth: 2,
                borderColor: '#e69420',
                color: '#e69420'
              }
            }}
          >
            Generate New Stories
          </Button>
        </Box>
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' },
          gap: 4
        }}>
          {successStories.map((story) => (
            <Card key={story.id} sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #e0e0e0',
              '&:hover': {
                borderColor: '#fea434',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }}>
              <CardContent sx={{ 
                p: 4,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography variant="h5" sx={{ 
                  mb: 2,
                  color: '#fea434',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5
                }}>
                  <span>{story.icon}</span>
                  {story.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, flexGrow: 1 }}>
                  {story.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ 
                  color: '#fea434',
                  fontWeight: 500
                }}>
                  Impact: {story.impact}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Newsletter */}
      <Box sx={{ 
        textAlign: 'center',
        p: 6,
        borderRadius: 2,
        bgcolor: 'rgba(254, 164, 52, 0.05)',
        border: '1px solid rgba(254, 164, 52, 0.2)'
      }}>
        <Typography variant="h3" sx={{ 
          mb: 2,
          fontWeight: 700,
          color: '#fea434'
        }}>
          Stay Connected
        </Typography>
        
        <Typography variant="h5" sx={{ 
          mb: 4,
          color: 'text.secondary',
          maxWidth: '600px',
          mx: 'auto'
        }}>
          Sign up for our newsletter to get updates.
        </Typography>
        
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          justifyContent: 'center',
          maxWidth: '600px',
          mx: 'auto'
        }}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            size="medium"
            sx={{ bgcolor: 'background.paper' }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ 
              px: 4,
              whiteSpace: 'nowrap',
              fontWeight: 600,
              bgcolor: '#fea434',
              '&:hover': { bgcolor: '#e69420' }
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;