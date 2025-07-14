import React from "react";
import { Typography, Link, Box } from "@mui/material";
import {
  Facebook,
  Phone,
  Email,
  Language,
  LocationOn,
} from "@mui/icons-material";
import JumpstartLogo from "../assets/jumpstart-logo.svg"; // Make sure path is correct

const Footer = () => {
  return (
    <footer className="bg-[#fea434] text-white w-full py-6 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <Typography variant="body2" className="text-white">
            &copy; {new Date().getFullYear()} Jumpstart Your Career. All rights reserved.
          </Typography>
          <img
            src={JumpstartLogo}
            alt="Jumpstart Logo"
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>

        {/* Right Section: Contact Info */}
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone fontSize="small" sx={{ color: "black" }} />
            <Typography variant="body2">065 808 9062</Typography>
          </div>
          <div className="flex items-center gap-2">
            <Email fontSize="small" sx={{ color: "black" }} />
            <Typography variant="body2">info@jumpstartyourcareer.org.za</Typography>
          </div>
         
