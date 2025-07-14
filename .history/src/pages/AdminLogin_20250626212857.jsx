// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError(true);
    }
  };

  return (
    <Box className="min-h-screen flex flex-col justify-center items-center px-4 bg-white">
      <Typography variant="h4" className="text-[#fea434] font-bold mb-2">
        Admin Login
      </Typography>
      <Typography className="mb-6 text-sm text-gray-500">
        Default Login: <strong>admin</strong> / <strong>1234</strong>
      </Typography>

      {error && (
        <Alert severity="error" className="mb-4">
          Incorrect username or password.
        </Alert>
      )}

      <Box className="w-full max-w-md space-y-4">
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          className="bg-[#fea434] text-white hover:bg-[#e59428] w-full"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default AdminLogin;
