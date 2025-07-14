import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import {
  PhoneInTalk,
  EmailOutlined,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fff7f0, #fff3e6)",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 0 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 10 }}>
        {/* Left Contact Info */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            color: "#333",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#fea434",
              letterSpacing: 2,
              fontFamily: "'Poppins', sans-serif",
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            Contact Jumpstart
          </Typography>

          {/* Info items */}
          {[
            {
              icon: <PhoneInTalk sx={{ fontSize: 36, color: "#fea434" }} />,
              label: "Phone",
              value: "+27 81 234 5678",
            },
            {
              icon: <EmailOutlined sx={{ fontSize: 36, color: "#fea434" }} />,
              label: "Email",
              value: "info@jumpstart.org.za",
            },
            {
              icon: <LocationOn sx={{ fontSize: 36, color: "#fea434" }} />,
              label: "Address",
              value: "123 JumpStart Lane, RuralTech Park, South Africa",
            },
          ].map(({ icon, label, value }, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              {icon}
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: 12,
                    color: "#555",
                  }}
                >
                  {label}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {value}
                </Typography>
              </Box>
            </Box>
          ))}

          {/* Social Links */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              mt: 4,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <Link
                href="#"
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#fea434",
                  fontSize: 28,
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#d18e0b" },
                }}
              >
                <Icon />
              </Link>
            ))}
          </Box>
        </Box>

        {/* Right Contact Form */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: "0 10px 30px rgba(254, 164, 52, 0.15)",
            p: { xs: 3, md: 6 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#fea434",
              mb: 4,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: 2,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Send Us A Message
          </Typography>

          <form>
            {[
              { label: "Full Name", type: "text", name: "name" },
              { label: "Email Address", type: "email", name: "email" },
              { label: "Subject", type: "text", name: "subject" },
            ].map(({ label, type, name }, i) => (
              <TextField
                key={i}
                label={label}
                variant="outlined"
                type={type}
                name={name}
                fullWidth
                required
                sx={{ mb: 3 }}
              />
            ))}

            <TextField
              label="Message"
              variant="outlined"
              name="message"
              multiline
              rows={5}
              fullWidth
              required
              sx={{ mb: 4 }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#fea434",
                fontWeight: 700,
                letterSpacing: 2,
                py: 1.8,
                textTransform: "uppercase",
                fontFamily: "'Poppins', sans-serif",
                boxShadow: "0 8px 15px rgba(254,164,52,0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#d18e0b",
                  boxShadow: "0 10px 20px rgba(209,142,11,0.6)",
                },
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
