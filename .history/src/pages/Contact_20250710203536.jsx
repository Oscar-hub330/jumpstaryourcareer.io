import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  useTheme,
  Link,
} from "@mui/material";
import {
  PhoneInTalk,
  EmailOutlined,
  LocationCity,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";

const Contact = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `radial-gradient(circle at top left, #fee3b6 0%, #fff7f0 70%), linear-gradient(135deg, #1b1b1b 0%, #2f2f2f 100%)`,
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 0 },
      }}
    >
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 10 }}>
        {/* LEFT: Contact Info */}
        <Box
          sx={{
            flex: 1,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 6,
            textAlign: { xs: "center", md: "left" },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              letterSpacing: 3,
              fontFamily: "'Orbitron', sans-serif",
              mb: 3,
              color: "#fea434",
              textTransform: "uppercase",
              textShadow: "0 0 15px #fea434",
            }}
          >
            Contact Jumpstart
          </Typography>

          {/* Info Items */}
          {[
            { icon: <PhoneInTalk sx={{ color: "#fea434", fontSize: 36 }} />, label: "Phone", value: "+27 81 234 5678" },
            { icon: <EmailOutlined sx={{ color: "#fea434", fontSize: 36 }} />, label: "Email", value: "info@jumpstart.org.za" },
            { icon: <LocationCity sx={{ color: "#fea434", fontSize: 36 }} />, label: "Address", value: "123 JumpStart Lane, RuralTech Park, South Africa" },
          ].map(({ icon, label, value }, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                fontSize: 18,
                fontWeight: 600,
                color: "#eee",
                textShadow: "0 0 5px rgba(0,0,0,0.5)",
              }}
            >
              {icon}
              <Box>
                <Typography variant="subtitle2" sx={{ opacity: 0.7, textTransform: "uppercase", fontWeight: "bold", fontSize: 12 }}>
                  {label}
                </Typography>
                <Typography>{value}</Typography>
              </Box>
            </Box>
          ))}

          {/* Social Media */}
          <Box sx={{ display: "flex", gap: 3, mt: 6, justifyContent: { xs: "center", md: "flex-start" } }}>
            {[Facebook, Twitter, Instagram].map((IconComp, i) => (
              <Link
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#fea434",
                  fontSize: 28,
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#fff" },
                }}
              >
                <IconComp />
              </Link>
            ))}
          </Box>
        </Box>

        {/* RIGHT: Contact Form */}
        <Box
          sx={{
            flex: 1,
            background: "rgba(30,30,30,0.85)",
            borderRadius: 4,
            padding: 5,
            boxShadow: "0 0 40px 2px #fea434",
            backdropFilter: "blur(10px)",
            color: "#eee",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              fontFamily: "'Orbitron', sans-serif",
              color: "#fea434",
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
                variant="standard"
                label={label}
                type={type}
                name={name}
                fullWidth
                required
                InputLabelProps={{ sx: { color: "#fea434" } }}
                sx={{
                  mb: 3,
                  input: { color: "#eee", fontWeight: 600 },
                  "& .MuiInput-underline:before": { borderBottomColor: "#fea434" },
                  "& .MuiInput-underline:hover:before": { borderBottomColor: "#fea434" },
                  "& .MuiInput-underline:after": { borderBottomColor: "#fea434" },
                }}
              />
            ))}
            <TextField
              variant="standard"
              label="Message"
              name="message"
              multiline
              rows={5}
              fullWidth
              required
              InputLabelProps={{ sx: { color: "#fea434" } }}
              sx={{
                mb: 4,
                textarea: { color: "#eee", fontWeight: 600 },
                "& .MuiInput-underline:before": { borderBottomColor: "#fea434" },
                "& .MuiInput-underline:hover:before": { borderBottomColor: "#fea434" },
                "& .MuiInput-underline:after": { borderBottomColor: "#fea434" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#fea434",
                fontWeight: 700,
                letterSpacing: 2,
                py: 1.5,
                textTransform: "uppercase",
                fontFamily: "'Orbitron', sans-serif",
                boxShadow: "0 6px 15px rgba(254,164,52,0.6)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#e58f16",
                  boxShadow: "0 8px 20px rgba(229,143,22,0.8)",
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
