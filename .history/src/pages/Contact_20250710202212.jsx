import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #fff, #fef6ee)",
        minHeight: "100vh",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight="bold" color="#fea434" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" color="#555" maxWidth="600px" mx="auto">
            Get in touch with us for partnerships, project inquiries, or more information about our programs.
          </Typography>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
          }}
        >
          {/* Contact Form */}
          <Paper
            elevation={4}
            sx={{
              flex: 1,
              p: 4,
              borderRadius: 4,
              background: "#fff",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="#fea434" mb={3}>
              Send us a message
            </Typography>
            <form>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={5}
                variant="outlined"
                margin="normal"
                required
              />
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#fea434",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  ":hover": { backgroundColor: "#e8932f" },
                }}
              >
                Submit
              </Button>
            </form>
          </Paper>

          {/* Contact Info */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 4,
              px: { xs: 0, md: 2 },
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Phone sx={{ color: "#fea434" }} />
              <Typography variant="body1" color="#444">
                +27 81 234 5678
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <Email sx={{ color: "#fea434" }} />
              <Typography variant="body1" color="#444">
                info@jumpstart.org.za
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <LocationOn sx={{ color: "#fea434" }} />
              <Typography variant="body1" color="#444">
                123 JumpStart Lane, RuralTech Park, SA
              </Typography>
            </Box>

            {/* Optional: Embedded Map or Image Placeholder */}
            <Box
              component="div"
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: 2,
              }}
            >
              <iframe
                title="map"
                width="100%"
                height="220"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=South+Africa&key=YOUR_API_KEY"
                allowFullScreen
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
