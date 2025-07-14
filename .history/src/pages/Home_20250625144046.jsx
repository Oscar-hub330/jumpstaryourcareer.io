import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: '60vh', // Adjust this value as needed
          px: { xs: 2, sm: 4 },
          py: 8
        }}
      >
        {/* Logo - Removed bounce animation */}
        <Box sx={{ mb: 4 }}>
          <img
            src={JumpstartLogo}
            alt="Jumpstart Logo"
            style={{ 
              width: '80px', 
              height: '80px',
              // Remove any animation-related styles
            }}
          />
        </Box>

        {/* Headline */}
        <Typography 
          variant="h2" 
          sx={{ 
            color: '#fea434',
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            lineHeight: 1.2
          }}
        >
          Empowering Rural Youth
        </Typography>

        {/* Subheading */}
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: 'text.secondary',
            mb: 5,
            maxWidth: '700px',
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6
          }}
        >
          Through skills development, entrepreneurship training, and ICT education.
        </Typography>

        {/* Buttons */}
        <Box 
          sx={{ 
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#fea434',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': { 
                backgroundColor: '#e69420',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
            onClick={() => navigate("/projects")}
          >
            Explore Projects
          </Button>
          <Button
            variant="outlined"
            sx={{ 
              borderColor: '#fea434',
              color: '#fea434',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              '&:hover': { 
                borderColor: '#e69420',
                color: '#e69420',
                backgroundColor: 'rgba(254, 164, 52, 0.08)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
            onClick={() => navigate("/contact")}
          >
            Get Involved
          </Button>
        </Box>
      </Box>

      {/* Rest of your page content... */}
    </Container>
  );
};

export default Home;