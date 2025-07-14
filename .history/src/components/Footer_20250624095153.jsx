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
    <footer className="bg-white border-t-0 border-[#fea434] text-black w-full py-1 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-8 md:grid-cols-2 gap-1">
        
        {/* Left Section */}
        <Box className="flex flex-col items-center md:items-start space-y-">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Jumpstart Your Career. All rights reserved.
          </Typography>
          <img
            src={JumpstartLogo}
            alt="Jumpstart Logo"
            className="w-10 h-10"
          />
        </Box>

        {/* Right Section: Contact Info */}
        <Box className="flex flex-col space-y-2 text-sm">
          <Box className="flex items-center gap-2">
            <Phone fontSize="small" sx={{ color: "#fea434" }} />
            <Typography variant="body2">065 808 9062</Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <Email fontSize="small" sx={{ color: "#fea434" }} />
            <Typography variant="body2">info@jumpstartyourcareer.org.za</Typography>
          </Box>
          <Box className="flex items-center gap-2">
            <Facebook fontSize="small" sx={{ color: "#fea434" }} />
            <Link
              href="https://www.facebook.com/jumpstartyourcareer"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              className="text-[#fea434]"
            >
              JumpStart your career
            </Link>
          </Box>
          <Box className="flex items-center gap-2">
            <Language fontSize="small" sx={{ color: "#fea434" }} />
            <Link
              href="http://www.jumpstartyourcareer.org.za/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              className="text-[#fea434]"
            >
              www.jumpstartyourcareer.org.za
            </Link>
          </Box>
          <Box className="flex items-center gap-2">
            <LocationOn fontSize="small" sx={{ color: "#fea434" }} />
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
