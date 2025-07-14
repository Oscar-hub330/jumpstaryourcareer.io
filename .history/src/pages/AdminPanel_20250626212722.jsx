// src/pages/AdminPanel.jsx
import React, { useState } from "react";
import { Box, Typography, TextField, Button, InputLabel, MenuItem, Select } from "@mui/material";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("blog");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");

  const handlePost = () => {
    const data = {
      title,
      date,
      type,
      image,
      content,
    };

    console.log("Posting:", data);
    alert("Content created (mocked). Add backend to persist.");
    // You can store this in localStorage or Firebase
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSendNewsletter = () => {
    // For now, mock action
    alert("Newsletter sent to subscribers (mocked)");
  };

  return (
    <Box className="min-h-screen px-6 py-10 bg-white space-y-8">
      <Typography variant="h4" className="text-[#fea434] font-bold">
        Admin Panel
      </Typography>
      <Typography>Welcome, Admin! Manage blogs, events, and newsletters here.</Typography>

      <Box className="space-y-4">
        <InputLabel>Content Type</InputLabel>
        <Select fullWidth value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="blog">Blog</MenuItem>
          <MenuItem value="event">Event</MenuItem>
          <MenuItem value="newsletter">Newsletter</MenuItem>
        </Select>

        <TextField fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        {type === "event" && (
          <TextField
            fullWidth
            type="date"
            label="Event Date"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        )}
        <TextField
          fullWidth
          multiline
          minRows={4}
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <InputLabel>Upload Image</InputLabel>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <img src={image} alt="Preview" className="mt-2 w-40 h-auto rounded shadow" />}

        <Button
          variant="contained"
          className="bg-[#fea434] text-white hover:bg-[#e59428]"
          onClick={handlePost}
        >
          Post {type}
        </Button>
      </Box>

      <Box className="mt-12">
        <Typography variant="h6" className="font-semibold mb-2">
          Newsletter Subscribers (Demo)
        </Typography>
        <ul className="list-disc ml-4 text-gray-600">
          <li>subscriber1@example.com</li>
          <li>subscriber2@example.com</li>
          <li>subscriber3@example.com</li>
        </ul>

        <Button
          variant="outlined"
          className="mt-4 text-[#fea434] border-[#fea434] hover:bg-[#fea434] hover:text-white"
          onClick={handleSendNewsletter}
        >
          Send Newsletter
        </Button>
      </Box>
    </Box>
  );
};

export default AdminPanel;
