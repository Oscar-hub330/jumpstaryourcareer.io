import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Alert, Paper } from "@mui/material";
import { Lock, Person } from "@mui/icons-material";

const AdminLogin = () => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("securePassword123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
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
    <Box 
      className="min-h-screen flex justify-center items-center p-4"
      sx={{ 
        background: "linear-gradient(to bottom right, #f8f9fa, #e9ecef)"
      }}
    >
      <Paper 
        elevation={3}
        className="w-full max-w-md p-8"
        sx={{
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
        }}
      >
        <Box className="text-center mb-8">
          <Typography 
            variant="h4" 
            className="font-bold mb-2"
            sx={{ color: "#fea434" }}
          >
            Admin Portal
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            Enter your credentials to access the dashboard
          </Typography>
        </Box>
        
        {error && (
          <Alert severity="error" className="mb-6">
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
              startAdornment: (
                <Person 
                  fontSize="small" 
                  sx={{ 
                    color: "action.active", 
                    mr: 1 
                  }} 
                />
              )
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1
              }
            }}
          />
          
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            className="mb-6"
            InputProps={{
              startAdornment: (
                <Lock 
                  fontSize="small" 
                  sx={{ 
                    color: "action.active", 
                    mr: 1 
                  }} 
                />
              )
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1
              }
            }}
          />
          
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              py: 1.5,
              borderRadius: 1,
              backgroundColor: "#fea434",
              "&:hover": {
                backgroundColor: "#e59428"
              }
            }}
          >
            {loading ? (
              <Box className="flex items-center">
                <CircularProgress 
                  size={24} 
                  sx={{ 
                    color: "white", 
                    mr: 1 
                  }} 
                />
                Authenticating...
              </Box>
            ) : "Login"}
          </Button>
          
          <Box className="mt-4 text-center">
            <Typography variant="caption" className="text-gray-500">
              Default credentials: admin / securePassword123
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AdminLogin;