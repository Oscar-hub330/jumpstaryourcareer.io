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
    <footer className="bg-[#fea434] text-white py-10">
      <Container
        maxWidth="lg"
        className="flex flex-col md:flex-row justify-between items-start gap-8"
      >
        {/* Left Section: Brand and Copyright */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Jumpstart Your Career
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            &copy; {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Box>

        {/* Right Section: Contact Info */}
        <Box className="flex flex-col space-y-3 text-sm">
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
              www.jumpstartyourcareer.org.za
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
