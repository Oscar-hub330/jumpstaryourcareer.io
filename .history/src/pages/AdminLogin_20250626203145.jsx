// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <Box className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <Typography variant="h4" className="text-[#fea434] mb-4">Admin Login</Typography>
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
      />
      <Button variant="contained" color="warning" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default AdminLogin;
