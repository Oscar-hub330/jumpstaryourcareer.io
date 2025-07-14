import React from "react";
import { Typography, Link, Box } from "@mui/material";
import {
  Facebook,
  Phone,
  Email,
  Language,
  LocationOn,
} from "@mui/icons-material";
import JumpstartLogo from "../assets/jumpstart-logo.svg"; // Update path if needed

const Footer = () => {
  return (
    <footer className="bg-[#fea434] py-10 mt-12 w-full text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        
        {/* Left section */}
        <div className="flex flex-col items-start space-y-2">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Jumpstart Your Career. All rights reserved.
          </Typography>
          <img
            src={JumpstartLogo}
            alt="Jumpstart Logo"
            className="w-10 h-10"
          />
        </div>

        {/* Right section */}
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone fontSize="small" sx={{ color: "black" }} />
            <Typography variant="body2">065 808 9062</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Email fontSize="small" sx={{ color: "black" }} />
            <Typography variant="body2">info@jumpstartyourcareer.org.za</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Facebook fontSize="small" sx={{ color: "black" }} />
            <Link
              href="https://www.facebook.com/jumpstartyourcareer"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
            >
              JumpStart your career
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Language fontSize="small" sx={{ color: "black" }} />
            <Link
              href="http://www.jumpstartyourcareer.org.za/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              color="inherit"
            >
              www.jumpstartyourcareer.org.za
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <LocationOn fontSize="small" sx={{ color: "black" }} />
            <Typography variant="body2">
              1 Bafana Road, Mataffin, Mbombela 1200
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
