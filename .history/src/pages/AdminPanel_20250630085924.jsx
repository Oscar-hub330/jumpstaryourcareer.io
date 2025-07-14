// src/pages/AdminPanel.jsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import BlogManager from "../components/admin/BlogManager";
import NewsEventsManagement from "./NewsEventsManagement";

const AdminPanel = () => (
  <Container maxWidth="lg" sx={{ py: 4 }}>
    <Box mb={6}>
      <Typography variant="h4" color="#fea434">Admin Dashboard</Typography>
    </Box>
    <BlogManager />
  </Container>
);

export default AdminPanel;
