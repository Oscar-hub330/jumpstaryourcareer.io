// src/pages/AdminPanel.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const AdminPanel = () => {
  return (
    <Box className="min-h-screen px-6 py-10 bg-white">
      <Typography variant="h4" className="text-[#fea434] font-bold mb-4">
        Admin Panel
      </Typography>
      <Typography>
        Welcome, Admin! This is your dashboard.
      </Typography>
    </Box>
  );
};

export default AdminPanel;
