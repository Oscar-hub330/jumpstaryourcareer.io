import React from "react";
import { Typography, Link, Box } from "@mui/material";
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
    <footer className="bg-[#fea434] text-orange-300 w-full py-6">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Logo + Copyright */}
        <Box className="flex flex-col items-center md:items-start space-y-3">
          <Typography variant="body2" color="white">
            &copy; {new Date().getFullYear()} Jumpstart Your Career. All rights reserved.
          </Typography>
          <img
            src={JumpstartLogo}
            alt="Jumpstart Logo"
            className="w-10 h-10"
          />
        </Box>

        {/* Right: Contact Info */}
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
      </div>
    </footer>
  );
};

export default Footer;
