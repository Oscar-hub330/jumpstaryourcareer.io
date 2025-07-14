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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: null,
    imageUrl: "",
  });

  const handleAdd = () => {
    const { title, content, image } = newBlog;
    if (!title || !content || !image) return alert("Please fill in all fields.");

    const newEntry = {
      ...newBlog,
      id: Date.now(),
      imageUrl: URL.createObjectURL(image),
    };

    setBlogs([newEntry, ...blogs]);
    setNewBlog({ title: "", content: "", image: null, imageUrl: "" });
  };

  const handleDelete = (id) => setBlogs(blogs.filter((b) => b.id !== id));

  return (
    <Box>
      {/* Header */}
      <Typography variant="h4" mb={2} fontWeight="bold" color="#fea434">
        Blog Management
      </Typography>

      {/* Divider */}
      <Divider sx={{ mb: 4 }} />

      {/* Blog Form */}
      <Card sx={{ mb: 6, p: 3, backgroundColor: "#fffbe6", border: "1px solid #ffe1a1" }}>
        <CardContent>
          <Typography variant="h6" mb={3}>
            Add New Blog
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Blog Title"
                variant="outlined"
                fullWidth
                value={newBlog.title}
                onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewBlog({ ...newBlog, image: e.target.files[0] })}
                style={{ marginTop: "8px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Blog Content"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={newBlog.content}
                onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{ bgcolor: "#fea434", fontWeight: "bold" }}
                onClick={handleAdd}
              >
                Publish Blog
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Blog Entries */}
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} lg={4} key={blog.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              {blog.imageUrl && (
                <CardMedia
                  component="img"
                  image={blog.imageUrl}
                  alt="blog"
                  height="200"
                  sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
              )}
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="h6" color="#fea434">
                    {blog.title}
                  </Typography>
                  <IconButton onClick={() => handleDelete(blog.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {blog.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogManager;
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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: null,
    imageUrl: "",
  });

  const handleAdd = () => {
    const { title, content, image } = newBlog;
    if (!title || !content || !image) return alert("Please fill in all fields.");

    const newEntry = {
      ...newBlog,
      id: Date.now(),
      imageUrl: URL.createObjectURL(image),
    };

    setBlogs([newEntry, ...blogs]);
    setNewBlog({ title: "", content: "", image: null, imageUrl: "" });
  };

  const handleDelete = (id) => setBlogs(blogs.filter((b) => b.id !== id));

  return (
    <Box>
      {/* Header */}
      <Typography variant="h4" mb={2} fontWeight="bold" color="#fea434">
        Blog Management
      </Typography>

      {/* Divider */}
      <Divider sx={{ mb: 4 }} />

      {/* Blog Form */}
      <Card sx={{ mb: 6, p: 3, backgroundColor: "#fffbe6", border: "1px solid #ffe1a1" }}>
        <CardContent>
          <Typography variant="h6" mb={3}>
            Add New Blog
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Blog Title"
                variant="outlined"
                fullWidth
                value={newBlog.title}
                onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewBlog({ ...newBlog, image: e.target.files[0] })}
                style={{ marginTop: "8px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Blog Content"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={newBlog.content}
                onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{ bgcolor: "#fea434", fontWeight: "bold" }}
                onClick={handleAdd}
              >
                Publish Blog
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Blog Entries */}
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} lg={4} key={blog.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              {blog.imageUrl && (
                <CardMedia
                  component="img"
                  image={blog.imageUrl}
                  alt="blog"
                  height="200"
                  sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                />
              )}
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="h6" color="#fea434">
                    {blog.title}
                  </Typography>
                  <IconButton onClick={() => handleDelete(blog.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {blog.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogManager;
