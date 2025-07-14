import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, Typography, Paper, Button, CircularProgress,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Chip, Alert
} from "@mui/material";
import { Dashboard, Description, CalendarToday, Send, People, ExitToApp } from "@mui/icons-material";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);

  // Mock data - no API needed
  const [dashboardData, setDashboardData] = useState({
    blogs: [],
    events: [],
    newsletters: [],
    subscribers: []
  });

  useEffect(() => {
    // Check authentication
    if (localStorage.getItem("isAdmin") !== "true") {
      navigate("/admin/login");
      return;
    }

    // Load mock data
    setLoading(true);
    setTimeout(() => {
      setDashboardData({
        blogs: [
          { id: 1, title: "Getting Started with React", category: "Tutorial" },
          { id: 2, title: "Advanced CSS Techniques", category: "Guide" }
        ],
        events: [
          { id: 1, title: "Tech Conference 2023", date: "2023-11-15" },
          { id: 2, title: "Web Accessibility Workshop", date: "2023-12-05" }
        ],
        newsletters: [
          { id: 1, subject: "Monthly Update - October", sent: true },
          { id: 2, subject: "Monthly Update - November", sent: false }
        ],
        subscribers: [
          { id: 1, email: "user1@example.com", name: "John Doe" },
          { id: 2, email: "user2@example.com", name: "Jane Smith" }
        ]
      });
      setLoading(false);
    }, 1000);
  }, [navigate]);

  if (loading) {
    return (
      <Box className="min-h-screen flex justify-center items-center">
        <CircularProgress sx={{ color: "#fea434" }} />
      </Box>
    );
  }

  return (
    <Box className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Paper className="w-64 p-4 shadow-md bg-white flex flex-col">
        <Typography variant="h6" sx={{ color: "#fea434" }} className="font-bold mb-8 mt-2">
          Admin Dashboard
        </Typography>
        
        <Button
          variant={activeTab === 0 ? "contained" : "text"}
          sx={activeTab === 0 ? { bgcolor: "#fea434" } : { color: "gray.700" }}
          startIcon={<Dashboard />}
          onClick={() => setActiveTab(0)}
        >
          Dashboard
        </Button>
        
        {/* Other tabs... */}
      </Paper>

      {/* Main Content */}
      <Box className="flex-1 p-8 overflow-auto">
        {activeTab === 0 && (
          <Box>
            <Typography variant="h4" sx={{ color: "#fea434" }} className="font-bold mb-6">
              Dashboard Overview
            </Typography>
            
            {/* Stats Cards */}
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard 
                title="Total Blogs" 
                value={dashboardData.blogs.length} 
                icon={<Description />} 
              />
              <StatCard 
                title="Upcoming Events" 
                value={dashboardData.events.length} 
                icon={<CalendarToday />} 
              />
              <StatCard 
                title="Subscribers" 
                value={dashboardData.subscribers.length} 
                icon={<People />} 
              />
            </Box>
            
            {/* Recent Activity */}
            <Typography variant="h5" className="text-gray-700 font-bold mb-4">
              Recent Activity
            </Typography>
            <RecentActivityTable data={dashboardData} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

// Reusable Stat Card Component
const StatCard = ({ title, value, icon }) => (
  <Paper className="p-4 rounded-lg shadow flex items-center">
    <Box className="mr-4 p-2 bg-[#fea434] rounded-full text-white">
      {icon}
    </Box>
    <Box>
      <Typography variant="h6" className="text-gray-500">{title}</Typography>
      <Typography variant="h3" sx={{ color: "#fea434" }} className="font-bold">
        {value}
      </Typography>
    </Box>
  </Paper>
);

// Recent Activity Table Component
const RecentActivityTable = ({ data }) => (
  <TableContainer component={Paper} className="shadow">
    <Table>
      <TableHead className="bg-gray-100">
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {[...data.blogs.slice(0, 2), ...data.events.slice(0, 2)].map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.category ? 'Blog' : 'Event'}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.date || 'N/A'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default AdminPanel;