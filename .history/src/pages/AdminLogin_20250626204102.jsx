// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // 🔒 Simple check for demo
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      alert("Incorrect credentials");
    }
  };

  return (
    <Box className="min-h-screen flex flex-col justify-center items-center px-4 bg-white">
      <Typography variant="h4" className="text-[#fea434] font-bold mb-4">
        Admin Login
      </Typography>
      <Box className="w-full max-w-md">
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          className="mb-4"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          className="mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          className="bg-[#fea434] text-white hover:bg-[#e59428]"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default AdminLogin;
