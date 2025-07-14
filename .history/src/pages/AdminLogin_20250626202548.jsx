import React from "react";
import { Typography, Box } from "@mui/material";

const AdminPanel = () => {
  return (
    <Box className="min-h-screen px-6 py-10 bg-white">
      <Typography variant="h4" className="text-[#fea434] font-bold mb-4">
        Admin Dashboard
      </Typography>
      <Typography variant="body1" className="text-gray-700">
        Welcome to the admin panel. From here you can manage blog posts, newsletters, and events.
      </Typography>
    </Box>
  );
};

export default AdminPanel;
