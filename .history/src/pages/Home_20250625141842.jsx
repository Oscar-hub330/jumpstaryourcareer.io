import React from "react";
import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import JumpstartLogo from "../assets/jumpstart-logo.svg";
import ImageCarousel from "../components/ImageCarousel";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Modern theme with Poppins font
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.5px'
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      marginBottom: '1.5rem'
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6
    }
  },
  palette: {
    primary: {
      main: '#fea434',
      contrastText: '#fff'
    },
    secondary: {
      main: '#2d3748'
    }
  }
});

const Home = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "Services", path: "/services" },
    { label: "News & Events", path: "/news" },
    { label: "Gallery", path: "/gallery" },
    { label: "FAQs", path: "/faqs" },
    { label: "Blog", path: "/blog" },
    { label: "Testimonials", path: "/testimonials" },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((item, index) => (
          <ListItem 
            button 
            key={index} 
            onClick={() => { navigate(item.path); setMobileOpen(false); }}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(254, 164, 52, 0.1)'
              }
            }}
          >
            <ListItemText 
              primary={item.label} 
              primaryTypographyProps={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const successStories = [
    {
      title: "Thabo's Tech Business",
      description: "From Limpopo to tech entrepreneur with our startup program",
      impact: "Created 5 local jobs"
    },
    {
      title: "Nomsa's Coding Journey",
      description: "Became a software developer through our bootcamp",
      impact: "Now earning 3x previous salary"
    },
    {
      title: "Sipho's Online Store",
      description: "Launched a successful e-commerce platform",
      impact: "100+ customers monthly"
    },
    {
      title: "Lerato's Coding School",
      description: "Opened a rural coding academy for youth",
      impact: "Trained 50+ students"
    },
    {
      title: "Mpho's Farming App",
      description: "Developed solution for local farmers",
      impact: "Used by 200+ farmers"
    },
    {
      title: "Bongani's Digital Agency",
      description: "Started a marketing agency serving local businesses",
      impact: "10+ clients in first year"
    }
  ];

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
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        backgroundColor: '#fff', 
        color: 'text.secondary',
        overflowX: 'hidden'
      }}>
        {/* Navigation Drawer */}
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* 🔶 Hero Section */}
          <Box sx={{ 
            textAlign: 'center', 
            py: 8,
            mt: 4
          }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              mb: 4,
              '& img': {
                animation: 'bounce 2s infinite',
                '@keyframes bounce': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' }
                }
              }
            }}>
              <img
                src={JumpstartLogo}
                alt="Jumpstart Logo"
                style={{ width: 80, height: 80 }}
              />
            </Box>
            <Typography variant="h1" sx={{ 
              color: 'primary.main',
              mb: 2
            }}>
              Empowering Rural Youth
            </Typography>
            <Typography variant="body1" sx={{ 
              maxWidth: 700,
              mx: 'auto',
              mb: 4
            }}>
              Through skills development, entrepreneurship training, and ICT education.
            </Typography>
            <Box sx={{ 
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Button
                variant="contained"
                onClick={() => navigate("/projects")}
                sx={{ px: 4, py: 1.5 }}
              >
                Explore Projects
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate("/contact")}
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(254, 164, 52, 0.08)'
                  }
                }}
              >
                Get Involved
              </Button>
            </Box>
          </Box>

          {/* 🔁 Carousel */}
          <Box sx={{ mb: 10 }}>
            <ImageCarousel />
          </Box>

          {/* 🔷 About Section */}
          <Box sx={{ 
            textAlign: 'center', 
            mb: 10,
            px: { xs: 0, md: 6 }
          }}>
            <Typography variant="h2" sx={{ color: 'primary.main' }}>
              About Jumpstart
            </Typography>
            <Typography variant="body1" sx={{ 
              maxWidth: 800,
              mx: 'auto',
              mb: 4
            }}>
              Jumpstart is committed to equipping youth in rural areas with the skills,
              confidence, and digital knowledge to thrive in the modern world. Our programs
              are designed to bridge the digital divide and create sustainable opportunities.
            </Typography>
            <Button
              variant="outlined"
              onClick={() => navigate("/about")}
              sx={{ 
                px: 4, 
                py: 1.5,
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(254, 164, 52, 0.08)'
                }
              }}
            >
              Learn More
            </Button>
          </Box>

          {/* 🔶 Focus Areas */}
          <Box sx={{ mb: 10 }}>
            <Typography variant="h2" sx={{ 
              color: 'primary.main',
              textAlign: 'center',
              mb: 6
            }}>
              Our Focus Areas
            </Typography>
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                lg: 'repeat(4, 1fr)' 
              },
              gap: 4
            }}>
              {focusAreas.map((area, idx) => (
                <Card key={idx} sx={{ 
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                  }
                }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Typography variant="h3" sx={{ 
                      fontSize: '3rem',
                      mb: 2
                    }}>
                      {area.icon}
                    </Typography>
                    <Typography variant="h5" sx={{ 
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 2
                    }}>
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

          {/* 🟦 Success Stories */}
          <Box sx={{ 
            textAlign: 'center', 
            mb: 10,
            px: { xs: 0, md: 6 }
          }}>
            <Typography variant="h2" sx={{ color: 'primary.main' }}>
              Success Stories
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              See how Jumpstart has transformed lives and communities
            </Typography>
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                lg: 'repeat(3, 1fr)' 
              },
              gap: 4
            }}>
              {successStories.map((story, i) => (
                <Card key={i} sx={{ 
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  boxShadow: 'none',
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    borderColor: 'primary.main'
                  }
                }}>
                  <CardContent sx={{ p: 3, textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 1
                    }}>
                      {story.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {story.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="caption" sx={{ 
                      color: 'primary.main',
                      fontWeight: 500
                    }}>
                      Impact: {story.impact}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* 🟧 Newsletter Signup */}
          <Box sx={{ 
            textAlign: 'center', 
            mb: 10,
            backgroundColor: 'rgba(254, 164, 52, 0.05)',
            p: 6,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'rgba(254, 164, 52, 0.2)'
          }}>
            <Typography variant="h2" sx={{ color: 'primary.main', mb: 2 }}>
              Stay Connected
            </Typography>
            <Typography variant="body1" sx={{ 
              maxWidth: 600,
              mx: 'auto',
              mb: 4
            }}>
              Sign up for our newsletter to get the latest updates on our programs and success stories.
            </Typography>
            <Box sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              maxWidth: 600,
              mx: 'auto'
            }}>
              <TextField 
                label="Email Address" 
                variant="outlined" 
                size="small" 
                fullWidth 
                sx={{ 
                  backgroundColor: '#fff',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'primary.main'
                    },
                    '&:hover fieldset': {
                      borderColor: 'primary.main'
                    }
                  }
                }}
              />
              <Button 
                variant="contained" 
                sx={{ 
                  px: 4,
                  whiteSpace: 'nowrap'
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Home;