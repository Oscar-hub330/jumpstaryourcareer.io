import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Box, Typography, Tabs, Tab, Paper, Button, 
  TextField, MenuItem, Table, TableBody, 
  TableCell, TableContainer, TableHead, 
  TableRow, Avatar, IconButton, Dialog, 
  DialogTitle, DialogContent, DialogActions,
  Chip, Snackbar, Alert, CircularProgress
} from "@mui/material";
import { 
  Add, Edit, Delete, Send, 
  Image, CalendarToday, Description,
  People, ExitToApp, Dashboard
} from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [loading, setLoading] = useState(false);
  
  // Blog state
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: null,
    category: "",
    previewImage: null
  });
  const [blogDialogOpen, setBlogDialogOpen] = useState(false);
  
  // Event state
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: new Date(),
    location: "",
    image: null,
    previewImage: null
  });
  const [eventDialogOpen, setEventDialogOpen] = useState(false);
  
  // Newsletter state
  const [newsletters, setNewsletters] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [newNewsletter, setNewNewsletter] = useState({
    subject: "",
    content: "",
    sent: false
  });
  const [newsletterDialogOpen, setNewsletterDialogOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching data
    setLoading(true);
    setTimeout(() => {
      // Mock data
      setBlogs([
        { id: 1, title: "Getting Started with React", category: "Tutorial", content: "Lorem ipsum...", image: "https://via.placeholder.com/300" },
        { id: 2, title: "Advanced CSS Techniques", category: "Guide", content: "Lorem ipsum...", image: "https://via.placeholder.com/300" }
      ]);
      
      setEvents([
        { id: 1, title: "Tech Conference 2023", date: "2023-11-15", location: "Virtual", description: "Annual tech conference", image: "https://via.placeholder.com/300" },
        { id: 2, title: "Workshop: Web Accessibility", date: "2023-12-05", location: "Online", description: "Learn about accessible web design", image: "https://via.placeholder.com/300" }
      ]);
      
      setNewsletters([
        { id: 1, subject: "Monthly Update - October", content: "Lorem ipsum...", sent: true, sentDate: "2023-10-01" },
        { id: 2, subject: "Monthly Update - November", content: "Lorem ipsum...", sent: false }
      ]);
      
      setSubscribers([
        { id: 1, email: "user1@example.com", name: "John Doe", subscribedAt: "2023-01-15" },
        { id: 2, email: "user2@example.com", name: "Jane Smith", subscribedAt: "2023-02-20" }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "blog") {
          setNewBlog({ ...newBlog, image: file, previewImage: reader.result });
        } else if (type === "event") {
          setNewEvent({ ...newEvent, image: file, previewImage: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBlog = () => {
    setLoading(true);
    setTimeout(() => {
      const newBlogItem = {
        id: blogs.length + 1,
        title: newBlog.title,
        content: newBlog.content,
        category: newBlog.category,
        image: newBlog.previewImage || "https://via.placeholder.com/300"
      };
      setBlogs([...blogs, newBlogItem]);
      setNewBlog({
        title: "",
        content: "",
        image: null,
        category: "",
        previewImage: null
      });
      setBlogDialogOpen(false);
      setSnackbar({ open: true, message: "Blog added successfully!", severity: "success" });
      setLoading(false);
    }, 800);
  };

  const handleAddEvent = () => {
    setLoading(true);
    setTimeout(() => {
      const newEventItem = {
        id: events.length + 1,
        title: newEvent.title,
        description: newEvent.description,
        date: newEvent.date.toISOString().split('T')[0],
        location: newEvent.location,
        image: newEvent.previewImage || "https://via.placeholder.com/300"
      };
      setEvents([...events, newEventItem]);
      setNewEvent({
        title: "",
        description: "",
        date: new Date(),
        location: "",
        image: null,
        previewImage: null
      });
      setEventDialogOpen(false);
      setSnackbar({ open: true, message: "Event added successfully!", severity: "success" });
      setLoading(false);
    }, 800);
  };

  const handleSendNewsletter = () => {
    setLoading(true);
    setTimeout(() => {
      const updatedNewsletter = {
        id: newsletters.length + 1,
        subject: newNewsletter.subject,
        content: newNewsletter.content,
        sent: true,
        sentDate: new Date().toISOString().split('T')[0]
      };
      setNewsletters([updatedNewsletter, ...newsletters]);
      setNewNewsletter({
        subject: "",
        content: "",
        sent: false
      });
      setNewsletterDialogOpen(false);
      setSnackbar({ open: true, message: "Newsletter sent to subscribers!", severity: "success" });
      setLoading(false);
    }, 1500);
  };

  const handleDeleteItem = (id, type) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      setLoading(true);
      setTimeout(() => {
        if (type === "blog") {
          setBlogs(blogs.filter(blog => blog.id !== id));
        } else if (type === "event") {
          setEvents(events.filter(event => event.id !== id));
        } else if (type === "newsletter") {
          setNewsletters(newsletters.filter(newsletter => newsletter.id !== id));
        }
        setSnackbar({ open: true, message: `${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`, severity: "info" });
        setLoading(false);
      }, 500);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <Paper className="w-64 p-4 shadow-md bg-white flex flex-col">
          <Typography variant="h6" className="text-[#fea434] font-bold mb-8 mt-2">
            Admin Dashboard
          </Typography>
          
          <Button
            variant={activeTab === 0 ? "contained" : "text"}
            className={`mb-2 justify-start ${activeTab === 0 ? 'bg-[#fea434]' : 'text-gray-700'}`}
            startIcon={<Dashboard />}
            onClick={() => setActiveTab(0)}
          >
            Dashboard
          </Button>
          
          <Button
            variant={activeTab === 1 ? "contained" : "text"}
            className={`mb-2 justify-start ${activeTab === 1 ? 'bg-[#fea434]' : 'text-gray-700'}`}
            startIcon={<Description />}
            onClick={() => setActiveTab(1)}
          >
            Blog Management
          </Button>
          
          <Button
            variant={activeTab === 2 ? "contained" : "text"}
            className={`mb-2 justify-start ${activeTab === 2 ? 'bg-[#fea434]' : 'text-gray-700'}`}
            startIcon={<CalendarToday />}
            onClick={() => setActiveTab(2)}
          >
            Event Management
          </Button>
          
          <Button
            variant={activeTab === 3 ? "contained" : "text"}
            className={`mb-2 justify-start ${activeTab === 3 ? 'bg-[#fea434]' : 'text-gray-700'}`}
            startIcon={<Send />}
            onClick={() => setActiveTab(3)}
          >
            Newsletter
          </Button>
          
          <Button
            variant={activeTab === 4 ? "contained" : "text"}
            className={`mb-2 justify-start ${activeTab === 4 ? 'bg-[#fea434]' : 'text-gray-700'}`}
            startIcon={<People />}
            onClick={() => setActiveTab(4)}
          >
            Subscribers
          </Button>
          
          <div className="flex-grow"></div>
          
          <Button
            variant="text"
            className="mt-auto justify-start text-gray-700"
            startIcon={<ExitToApp />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Paper>
        
        {/* Main Content */}
        <Box className="flex-1 p-8 overflow-auto">
          {loading ? (
            <Box className="flex justify-center items-center h-full">
              <CircularProgress className="text-[#fea434]" />
            </Box>
          ) : (
            <>
              {activeTab === 0 && (
                <Box>
                  <Typography variant="h4" className="text-gray-800 font-bold mb-6">
                    Dashboard Overview
                  </Typography>
                  
                  <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Paper className="p-4 rounded-lg shadow">
                      <Typography variant="h6" className="text-gray-500">Total Blogs</Typography>
                      <Typography variant="h3" className="text-[#fea434] font-bold">{blogs.length}</Typography>
                    </Paper>
                    <Paper className="p-4 rounded-lg shadow">
                      <Typography variant="h6" className="text-gray-500">Upcoming Events</Typography>
                      <Typography variant="h3" className="text-[#fea434] font-bold">
                        {events.filter(e => new Date(e.date) > new Date()).length}
                      </Typography>
                    </Paper>
                    <Paper className="p-4 rounded-lg shadow">
                      <Typography variant="h6" className="text-gray-500">Subscribers</Typography>
                      <Typography variant="h3" className="text-[#fea434] font-bold">{subscribers.length}</Typography>
                    </Paper>
                  </Box>
                  
                  <Typography variant="h5" className="text-gray-700 font-bold mb-4">
                    Recent Activity
                  </Typography>
                  <Paper className="p-4 rounded-lg shadow">
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {[...blogs.slice(0, 3), ...events.slice(0, 3), ...newsletters.slice(0, 3)]
                            .sort((a, b) => new Date(b.date || b.sentDate) - new Date(a.date || a.sentDate))
                            .map((item) => (
                              <TableRow key={`${item.id}-${item.title}`}>
                                <TableCell>
                                  {item.content ? 'Blog' : item.description ? 'Event' : 'Newsletter'}
                                </TableCell>
                                <TableCell>{item.title || item.subject}</TableCell>
                                <TableCell>{item.date || item.sentDate}</TableCell>
                                <TableCell>
                                  {item.sent ? (
                                    <Chip label="Sent" color="success" size="small" />
                                  ) : item.date ? (
                                    new Date(item.date) > new Date() ? (
                                      <Chip label="Upcoming" color="info" size="small" />
                                    ) : (
                                      <Chip label="Past" size="small" />
                                    )
                                  ) : (
                                    <Chip label="Draft" color="warning" size="small" />
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Paper>
                </Box>
              )}
              
              {activeTab === 1 && (
                <Box>
                  <Box className="flex justify-between items-center mb-6">
                    <Typography variant="h4" className="text-gray-800 font-bold">
                      Blog Management
                    </Typography>
                    <Button
                      variant="contained"
                      className="bg-[#fea434] hover:bg-[#e59428]"
                      startIcon={<Add />}
                      onClick={() => setBlogDialogOpen(true)}
                    >
                      Add New Blog
                    </Button>
                  </Box>
                  
                  <TableContainer component={Paper} className="shadow">
                    <Table>
                      <TableHead className="bg-gray-100">
                        <TableRow>
                          <TableCell>Image</TableCell>
                          <TableCell>Title</TableCell>
                          <TableCell>Category</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {blogs.map((blog) => (
                          <TableRow key={blog.id}>
                            <TableCell>
                              <Avatar 
                                variant="rounded" 
                                src={blog.image} 
                                className="w-12 h-12"
                              />
                            </TableCell>
                            <TableCell>{blog.title}</TableCell>
                            <TableCell>
                              <Chip label={blog.category} size="small" />
                            </TableCell>
                            <TableCell>
                              <IconButton>
                                <Edit className="text-blue-500" />
                              </IconButton>
                              <IconButton onClick={() => handleDeleteItem(blog.id, "blog")}>
                                <Delete className="text-red-500" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
              
              {activeTab === 2 && (
                <Box>
                  <Box className="flex justify-between items-center mb-6">
                    <Typography variant="h4" className="text-gray-800 font-bold">
                      Event Management
                    </Typography>
                    <Button
                      variant="contained"
                      className="bg-[#fea434] hover:bg-[#e59428]"
                      startIcon={<Add />}
                      onClick={() => setEventDialogOpen(true)}
                    >
                      Add New Event
                    </Button>
                  </Box>
                  
                  <TableContainer component={Paper} className="shadow">
                    <Table>
                      <TableHead className="bg-gray-100">
                        <TableRow>
                          <TableCell>Image</TableCell>
                          <TableCell>Title</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Location</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {events.map((event) => (
                          <TableRow key={event.id}>
                            <TableCell>
                              <Avatar 
                                variant="rounded" 
                                src={event.image} 
                                className="w-12 h-12"
                              />
                            </TableCell>
                            <TableCell>{event.title}</TableCell>
                            <TableCell>{event.date}</TableCell>
                            <TableCell>{event.location}</TableCell>
                            <TableCell>
                              <IconButton>
                                <Edit className="text-blue-500" />
                              </IconButton>
                              <IconButton onClick={() => handleDeleteItem(event.id, "event")}>
                                <Delete className="text-red-500" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
              
              {activeTab === 3 && (
                <Box>
                  <Box className="flex justify-between items-center mb-6">
                    <Typography variant="h4" className="text-gray-800 font-bold">
                      Newsletter Management
                    </Typography>
                    <Button
                      variant="contained"
                      className="bg-[#fea434] hover:bg-[#e59428]"
                      startIcon={<Add />}
                      onClick={() => setNewsletterDialogOpen(true)}
                    >
                      Create Newsletter
                    </Button>
                  </Box>
                  
                  <TableContainer component={Paper} className="shadow">
                    <Table>
                      <TableHead className="bg-gray-100">
                        <TableRow>
                          <TableCell>Subject</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Date Sent</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {newsletters.map((newsletter) => (
                          <TableRow key={newsletter.id}>
                            <TableCell>{newsletter.subject}</TableCell>
                            <TableCell>
                              {newsletter.sent ? (
                                <Chip label="Sent" color="success" size="small" />
                              ) : (
                                <Chip label="Draft" color="warning" size="small" />
                              )}
                            </TableCell>
                            <TableCell>{newsletter.sentDate || "-"}</TableCell>
                            <TableCell>
                              <IconButton>
                                <Edit className="text-blue-500" />
                              </IconButton>
                              <IconButton onClick={() => handleDeleteItem(newsletter.id, "newsletter")}>
                                <Delete className="text-red-500" />
                              </IconButton>
                              {!newsletter.sent && (
                                <IconButton>
                                  <Send className="text-green-500" />
                                </IconButton>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
              
              {activeTab === 4 && (
                <Box>
                  <Typography variant="h4" className="text-gray-800 font-bold mb-6">
                    Newsletter Subscribers
                  </Typography>
                  
                  <TableContainer component={Paper} className="shadow">
                    <Table>
                      <TableHead className="bg-gray-100">
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Subscribed On</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {subscribers.map((subscriber) => (
                          <TableRow key={subscriber.id}>
                            <TableCell>{subscriber.name}</TableCell>
                            <TableCell>{subscriber.email}</TableCell>
                            <TableCell>{subscriber.subscribedAt}</TableCell>
                            <TableCell>
                              <Button
                                variant="outlined"
                                size="small"
                                className="text-[#fea434] border-[#fea434]"
                              >
                                Send Email
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
      
      {/* Blog Dialog */}
      <Dialog open={blogDialogOpen} onClose={() => setBlogDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add New Blog Post</DialogTitle>
        <DialogContent>
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Box>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                className="mb-4"
                value={newBlog.title}
                onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              />
              
              <TextField
                fullWidth
                select
                label="Category"
                variant="outlined"
                className="mb-4"
                value={newBlog.category}
                onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
              >
                <MenuItem value="Tutorial">Tutorial</MenuItem>
                <MenuItem value="Guide">Guide</MenuItem>
                <MenuItem value="News">News</MenuItem>
                <MenuItem value="Case Study">Case Study</MenuItem>
              </TextField>
              
              <Button
                variant="outlined"
                component="label"
                startIcon={<Image />}
                className="mb-4"
                fullWidth
              >
                Upload Featured Image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "blog")}
                />
              </Button>
              
              {newBlog.previewImage && (
                <Box className="mb-4">
                  <Typography variant="body2" className="mb-2">Image Preview:</Typography>
                  <img 
                    src={newBlog.previewImage} 
                    alt="Preview" 
                    className="max-h-40 rounded"
                  />
                </Box>
              )}
            </Box>
            
            <Box>
              <TextField
                fullWidth
                label="Content"
                variant="outlined"
                multiline
                rows={10}
                value={newBlog.content}
                onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBlogDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleAddBlog}
            className="bg-[#fea434] text-white hover:bg-[#e59428]"
            disabled={!newBlog.title || !newBlog.content || loading}
          >
            {loading ? <CircularProgress size={24} /> : "Publish Blog"}
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Event Dialog */}
      <Dialog open={eventDialogOpen} onClose={() => setEventDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <Box>
              <TextField
                fullWidth
                label="Event Title"
                variant="outlined"
                className="mb-4"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              
              <DatePicker
                label="Event Date"
                value={newEvent.date}
                onChange={(date) => setNewEvent({ ...newEvent, date })}
                renderInput={(params) => <TextField {...params} fullWidth className="mb-4" />}
              />
              
              <TextField
                fullWidth
                label="Location"
                variant="outlined"
                className="mb-4"
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              />
              
              <Button
                variant="outlined"
                component="label"
                startIcon={<Image />}
                className="mb-4"
                fullWidth
              >
                Upload Event Image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "event")}
                />
              </Button>
              
              {newEvent.previewImage && (
                <Box className="mb-4">
                  <Typography variant="body2" className="mb-2">Image Preview:</Typography>
                  <img 
                    src={newEvent.previewImage} 
                    alt="Preview" 
                    className="max-h-40 rounded"
                  />
                </Box>
              )}
            </Box>
            
            <Box>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={10}
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEventDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleAddEvent}
            className="bg-[#fea434] text-white hover:bg-[#e59428]"
            disabled={!newEvent.title || !newEvent.description || loading}
          >
            {loading ? <CircularProgress size={24} /> : "Add Event"}
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Newsletter Dialog */}
      <Dialog open={newsletterDialogOpen} onClose={() => setNewsletterDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Create Newsletter</DialogTitle>
        <DialogContent>
          <Box className="mt-4">
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              className="mb-4"
              value={newNewsletter.subject}
              onChange={(e) => setNewNewsletter({ ...newNewsletter, subject: e.target.value })}
            />
            
            <TextField
              fullWidth
              label="Content"
              variant="outlined"
              multiline
              rows={12}
              value={newNewsletter.content}
              onChange={(e) => setNewNewsletter({ ...newNewsletter, content: e.target.value })}
            />
            
            <Box className="mt-4 p-4 bg-gray-50 rounded">
              <Typography variant="body2" className="mb-2">
                This newsletter will be sent to {subscribers.length} subscribers.
              </Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNewsletterDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleSendNewsletter}
            className="bg-[#fea434] text-white hover:bg-[#e59428]"
            disabled={!newNewsletter.subject || !newNewsletter.content || loading}
          >
            {loading ? <CircularProgress size={24} /> : "Send Newsletter"}
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          className="w-full"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
};

export default AdminPanel;