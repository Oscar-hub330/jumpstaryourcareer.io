import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, #fff, #fef6ee)`,
        minHeight: "100vh",
        py: 10,
        px: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{
              color: "#fea434",
              letterSpacing: 3,
              textTransform: "uppercase",
              fontFamily: "'Orbitron', sans-serif",
              mb: 1,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            color="#444"
            maxWidth={600}
            mx="auto"
            sx={{ fontWeight: 500, letterSpacing: 0.5 }}
          >
            Reach out to Jumpstart to explore partnerships, inquiries, or get more info about our programs.
          </Typography>
        </Box>

        {/* Content Grid */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
          }}
        >
          {/* Contact Form with Glassmorphic style */}
          <Paper
            elevation={12}
            sx={{
              flex: 1,
              p: 5,
              borderRadius: 4,
              background:
                "rgba(255, 255, 255, 0.85)",
              boxShadow:
                "0 8px 32px 0 rgba(254, 164, 52, 0.3)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(254, 164, 52, 0.3)",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 12px 48px 0 rgba(254, 164, 52, 0.6)",
              },
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              color="#fea434"
              mb={4}
              sx={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Send us a message
            </Typography>
            <form>
              <TextField
                fullWidth
                label="Full Name"
                variant="filled"
                margin="normal"
                required
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="filled"
                margin="normal"
                required
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={5}
                variant="filled"
                margin="normal"
                required
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  backgroundColor: "#fea434",
                  px: 5,
                  py: 1.75,
                  fontWeight: "bold",
                  borderRadius: 3,
                  letterSpacing: 1,
                  fontFamily: "'Orbitron', sans-serif",
                  textTransform: "uppercase",
                  boxShadow: "0 6px 15px rgba(254,164,52,0.6)",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e58f16",
                    boxShadow: "0 8px 20px rgba(229,143,22,0.8)",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Paper>

          {/* Contact Info + Map with modern style */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 5,
            }}
          >
            {/* Contact Details Cards */}
            {[
              {
                icon: <Phone sx={{ color: "#fea434", fontSize: 32 }} />,
                text: "+27 81 234 5678",
              },
              {
                icon: <Email sx={{ color: "#fea434", fontSize: 32 }} />,
                text: "info@jumpstart.org.za",
              },
              {
                icon: <LocationOn sx={{ color: "#fea434", fontSize: 32 }} />,
                text: "123 JumpStart Lane, RuralTech Park, South Africa",
              },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  background: "rgba(254,164,52,0.08)",
                  borderRadius: 3,
                  px: 3,
                  py: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2.5,
                  fontWeight: 600,
                  color: "#444",
                  fontSize: 18,
                  boxShadow:
                    "0 4px 15px rgba(254,164,52,0.15)",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(254,164,52,0.15)",
                  },
                }}
              >
                {item.icon}
                <Typography>{item.text}</Typography>
              </Box>
            ))}

            {/* Map Container */}
            <Box
              sx={{
                mt: 2,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(254,164,52,0.3)",
                border: "1px solid rgba(254,164,52,0.4)",
              }}
            >
              <iframe
                title="Jumpstart Location"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?q=123+JumpStart+Lane+RuralTech+Park+South+Africa&key=AIzaSyBEjbhMD4aRJS8Y8pp1OEkaSuNSNfvQezk`}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
