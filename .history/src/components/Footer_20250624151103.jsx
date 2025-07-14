import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";
import {
  Facebook,
  Phone,
  Email,
  Language,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg bg-white/70 border-2 border-[#fea434] rounded-t-2xl text-black py-4 mt-8">
      <Container
        maxWidth="lg"
        className="flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-4 md:gap-0"
      >
        {/* Left Section */}
        <Box>
          <Typography variant="body2" fontSize="0.85rem">
            &copy; {new Date().getFullYear()} Jumpstart Your Career. All rights reserved.
          </Typography>
        </Box>

        {/* Right Section */}
        <Box className="flex flex-col space-y-1 text-xs">
          <Box className="flex items-center gap-1">
            <Phone fontSize="small" sx={{ color: "#fea434" }} />
            <Typography variant="body2" fontSize="0.85rem">065 808 9062</Typography>
          </Box>
          <Box className="flex items-center gap-1">
            <Email fontSize="small" sx={{ color: "#fea434" }} />
            <Typography variant="body2" fontSize="0.85rem">info@jumpstartyourcareer.org.za</Typography>
          </Box>
          <Box className="flex items-center gap-1">
            <Facebook fontSize="small" sx={{ color: "#fea434" }} />
            <Link
              href="https://www.facebook.com/jumpstartyourcareer"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
              fontSize="0.85rem"
            >
              JumpStart your career
            </Link>
          </Box>
          <Box className="flex items-center gap-1">
            <Language fontSize="small" sx={{ color: "#fea434" }} />
            <Link
              href="http://www.jumpstartyourcareer.org.za/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
              fontSize="0.85rem"
            >
              www.jumpstartyourcareer.org.za
            </Link>
          </Box>
          <Box className="flex items-center gap-1">
            <LocationOn fontSize="small" sx={{ color: "#fea434" }} />
            <Typography variant="body2" fontSize="0.85rem">
              1 Bafana Road, Mataffin, Mbombela 1200
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
