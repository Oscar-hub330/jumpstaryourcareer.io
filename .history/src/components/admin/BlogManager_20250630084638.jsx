import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Visibility";
import UploadIcon from "@mui/icons-material/Upload";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    id: null,
    title: "",
    content: "",
    image: null,
    imageUrl: "",
  });
  const [previewing, setPreviewing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewBlog({ ...newBlog, image: file, imageUrl: URL.createObjectURL(file) });
  };

  const handlePublish = () => {
    if (!newBlog.title || !newBlog.content || !newBlog.imageUrl) {
      alert("All fields are required before publishing.");
      return;
    }

    if (editingId !== null) {
      // Save edited blog
      const updated = blogs.map((blog) =>
        blog.id === editingId ? { ...newBlog, id: editingId } : blog
      );
      setBlogs(updated);
    } else {
      // New blog
      const blogToAdd = {
        ...newBlog,
        id: Date.now(),
      };
      setBlogs([blogToAdd, ...blogs]);
    }

    resetForm();
  };

  const handleEdit = (blog) => {
    setNewBlog({ ...blog });
    setEditingId(blog.id);
    setPreviewing(true);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
    if (editingId === id) resetForm();
  };

  const resetForm = () => {
    setNewBlog({ title: "", content: "", image: null, imageUrl: "" });
    setPreviewing(false);
    setEditingId(null);
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" color="#fea434" mb={2}>
        Blog Management
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* Blog Form */}
      <Card sx={{ mb: 6, p: 3, backgroundColor: "#fffbe6", border: "1px solid #ffe1a1" }}>
        <CardContent>
          <Typography variant="h6" mb={3}>
            {editingId ? "Edit Blog" : "Add New Blog"}
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Blog Title"
                variant="outlined"
                name="title"
                fullWidth
                value={newBlog.title}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <label htmlFor="upload-button">
                <input
                  accept="image/*"
                  id="upload-button"
                  type="file"
                  hidden
                  onChange={handleImageUpload}
                />
                <Button
                  variant="outlined"
                  startIcon={<UploadIcon />}
                  component="span"
                  sx={{ mt: 1 }}
                >
                  Upload Image
                </Button>
              </label>
              {newBlog.imageUrl && (
                <Box mt={2}>
                  <img
                    src={newBlog.imageUrl}
                    alt="Preview"
                    style={{ height: 120, borderRadius: 10 }}
                  />
                </Box>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Blog Content"
                name="content"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={newBlog.content}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" gap={2}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#fea434", fontWeight: "bold" }}
                  onClick={() => setPreviewing(true)}
                >
                  Preview
                </Button>
                <Button
                  variant="outlined"
                  onClick={resetForm}
                  color="secondary"
                >
                  Reset
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Preview */}
      {previewing && (
        <Card sx={{ mb: 4, p: 2, border: "1px dashed #fea434", backgroundColor: "#fffaf2" }}>
          <Typography variant="h6" color="#fea434" mb={2}>
            Preview
          </Typography>
          {newBlog.imageUrl && (
            <CardMedia
              component="img"
              height="200"
              image={newBlog.imageUrl}
              alt="Preview Image"
              sx={{ borderRadius: 2 }}
            />
          )}
          <CardContent>
            <Typography variant="h5" mb={1}>
              {newBlog.title}
            </Typography>
            <Typography variant="body1">{newBlog.content}</Typography>

            <Box mt={2}>
              <Button
                variant="contained"
                sx={{ bgcolor: "#fea434", mr: 2 }}
                onClick={handlePublish}
              >
                {editingId ? "Save Changes" : "Publish"}
              </Button>
              <Button variant="text" color="error" onClick={resetForm}>
                Cancel
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Blog Grid */}
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              {blog.imageUrl && (
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.imageUrl}
                  alt="Blog Image"
                  sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
              )}
              <CardContent>
                <Typography variant="h6" color="#fea434" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {blog.content}
                </Typography>
                <Box display="flex" justifyContent="flex-end" gap={1}>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEdit(blog)} color="primary">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(blog.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogManager;
