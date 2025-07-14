import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { Lock, Person } from "@mui/icons-material";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      // In a real app, this would be an API call to your backend
      // This is just for demo purposes
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
      
      if (username === "admin" && password === "securePassword123") {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin/dashboard");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <Box className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Box className="flex justify-center mb-6">
          <Box className="bg-[#fea434] p-3 rounded-full">
            <Lock className="text-white text-3xl" />
          </Box>
        </Box>
        <Typography variant="h4" className="text-center text-gray-800 font-bold mb-2">
          Admin Portal
        </Typography>
        <Typography variant="body2" className="text-center text-gray-500 mb-6">
          Enter your credentials to access the dashboard
        </Typography>
        
        {error && (
          <Alert severity="error" className="mb-4">
            {error}
          </Alert>
        )}
        
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            className="mb-4"
            InputProps={{
              startAdornment: <Person className="text-gray-400 mr-2" />
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            className="mb-6"
            InputProps={{
              startAdornment: <Lock className="text-gray-400 mr-2" />
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="bg-[#fea434] text-white hover:bg-[#e59428] h-12"
            disabled={loading}
          >
            {loading ? "Authenticating..." : "Login"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AdminLogin;