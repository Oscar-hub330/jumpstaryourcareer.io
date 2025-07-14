import React from "react";
import { Typography, Link, Box } from "@mui/material";
import {
  Facebook,
  Phone,
  Email,
  Language,
  LocationOn,
} from "@mui/icons-material";
import JumpstartLogo from "../assets/jumpstart-logo.svg"; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-[#fea434] py-10 mt-12 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Card-like Footer Container */}
        <div className="bg-white rounded-xl border-2 border-[#fea434] shadow-md p-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">

          {/* Left: Copyright & Logo */}
          <div className="flex flex-col items-start space-y-2">
            <Typography variant="body2" className="text-black font-medium">
              &copy; {new Date().getFullYear()} Jumpstart Your Career. All rights reserved.
            </Typography>
            <img
              src={JumpstartLogo}
              alt="Jumpstart Logo"
              className="w-10 h-10"
            />
          </div>

          {/* Right: Contact Details */}
          <div className="flex flex-col space-y-2 text-sm text-black">
            <div className="flex items-center gap-2">
              <Phone fontSize="small" sx={{ color: "#fea434" }} />
              <Typography variant="body2">065 808 9062</Typography>
            </div>
            <div className="flex items-center gap-2">
              <Email fontSize="small" sx={{ color: "#fea434" }} />
              <Typography variant="body2">info@jumpstartyourcareer.org.za</Typography>
            </div>
            <div className="flex items-center gap-2">
              <Facebook fontSize="small" sx={{ color: "#fea434" }} />
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
              <Language fontSize="small" sx={{ color: "#fea434" }} />
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
              <LocationOn fontSize="small" sx={{ color: "#fea434" }} />
              <Typography variant="body2">
                1 Bafana Road, Mataffin, Mbombela 1200
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
