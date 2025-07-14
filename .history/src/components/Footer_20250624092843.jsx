import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";
import {
  Facebook,
  Phone,
  Email,
  Language,
  LocationOn,
} from "@mui/icons-material";
import JumpstartLogo from "../assets/jumpstart-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#fea434] text-white py-6 mt-12">
      <Container
        maxWidth="lg"
        className="flex flex-col md:flex-row justify-between items-start text-center md:text-left space-y-6 md:space-y-0"
      >
        {/* Left Section: Copyright & Logo */}
        <Box className="flex flex-col items-center md:items-start space-y-3">
          <Typography variant="body2" color="white">
            &copy; {new Date().getFullYear()} Jumpstart Your Career. All rights reserved.
          </Typography>
          <img
            src={JumpstartLogo}
            alt="Jumpstart Logo"
            className="w-14 h-14 mt-2"
          />
        </Box>

        {/* Right Section: Contact Info */}
        <Box className="flex flex-col space-y-2 text-sm">
          <Box className="flex items-center gap-2">
            <Phone fontSize="small" sx={{ color: "black" }} />
            <Typography variant="body2">065 808 9062</Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <Email fontSize="small" sx={{ color: "black" }} />
            <Typography variant="body2">info@jumpstartyourcareer.org.za</Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <Facebook fontSize="small" sx={{ color: "black" }} />
            <Link
              href="https://www.facebook.com/jumpstartyourcareer"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="white"
            >
              JumpStart your career
            </Link>
          </Box>
          <Box className="flex items-center gap-2">
            <Language fontSize="small" sx={{ color: "black" }} />
            <Link
              href="http://www.jumpstartyourcareer.org.za/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="white"
            >
              http://www.jumpstartyourcareer.org.za/
            </Link>
          </Box>
          <Box className="flex items-center gap-2">
            <LocationOn fontSize="small" sx={{ color: "black" }} />
            <Typography variant="body2">
              1 Bafana Road, Mataffin, Mbombela 1200
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
