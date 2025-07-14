import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Chip,
  Paper,
} from "@mui/material";

const AdminNewsPanel = () => {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    author: "",
    date: "",
    image: "",
    tags: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...form,
      id: news.length + 1,
      tags: form.tags.split(",").map((tag) => tag.trim()),
    };
    setNews([...news, newEntry]);
    setForm({ title: "", description: "", author: "", date: "", image: "", tags: "" });
  };

  return (
    <Box className="min-h-screen py-10 px-6 md:px-20 bg-white">
      <Typography variant="h4" className="text-[#fea434] font-bold mb-6 text-center">
        Admin Panel: Create News & Events
      </Typography>

      <form onSubmit={handleSubmit} className="mb-10">
        <Grid container spacing={2}>
          {Object.entries(form).map(([key, value]) => (
            <Grid item xs={12} sm={6} key={key}>
              <TextField
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                name={key}
                value={value}
                onChange={handleChange}
                fullWidth
                required={key !== "image"}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 4, backgroundColor: "#fea434", '&:hover': { backgroundColor: "#e69420" } }}
        >
          Add News/Event
        </Button>
      </form>

      <Typography variant="h5" className="text-[#fea434] mb-4">
        Preview
      </Typography>

      <Grid container spacing={3}>
        {news.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper className="p-4 border border-[#fea434] shadow">
              <Typography variant="h6" className="text-[#fea434] font-bold">
                {item.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {item.description}
              </Typography>
              <Typography variant="caption" className="text-gray-500">
                {item.author} — {new Date(item.date).toLocaleDateString("en-ZA")}
              </Typography>
              <Box className="mt-2 flex gap-1 flex-wrap">
                {item.tags.map((tag, idx) => (
                  <Chip key={idx} label={`#${tag}`} size="small" style={{ backgroundColor: "#fea43420", color: "#fea434" }} />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminNewsPanel;
