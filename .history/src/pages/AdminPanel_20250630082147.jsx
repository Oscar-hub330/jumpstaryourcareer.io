// src/pages/AdminPanel.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";
import BlogManager from "../components/admin/BlogManager";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Box mt={8} p={4} textAlign="center" border="1px solid #ccc" borderRadius={2}>
        <Typography variant="h4" color="#fea434" mb={3}>Admin Dashboard</Typography>
        <Typography variant="body1" mb={4}>
          Welcome! You can manage content from here.
        </Typography>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default AdminPanel;
