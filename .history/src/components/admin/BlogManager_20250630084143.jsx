// src/components/admin/BlogManager.jsx
import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: null,
    imageUrl: "",
  });

  const handleAdd = () => {
    if (newBlog.title && newBlog.content && newBlog.image) {
      const newEntry = {
        ...newBlog,
        id: Date.now(),
        imageUrl: URL.createObjectURL(newBlog.image),
      };
      setBlogs([...blogs, newEntry]);
      setNewBlog({ title: "", content: "", image: null, imageUrl: "" });
    }
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div>
      <Typography variant="h5" color="primary" gutterBottom>
        Blog Management
      </Typography>

      <div className="mb-4 space-y-4">
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setNewBlog({ ...newBlog, image: e.target.files[0] })
          }
        />
        <Button
          onClick={handleAdd}
          variant="contained"
          sx={{ bgcolor: "#fea434" }}
        >
          Add Blog
        </Button>
      </div>

      {/* Blog List */}
      {blogs.map((blog) => (
        <Card key={blog.id} className="mb-4 border border-orange-400">
          <CardContent>
            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt="blog"
                className="w-full h-[200px] object-cover rounded mb-2"
              />
            )}
            <Typography variant="h6" color="#fea434">
              {blog.title}
            </Typography>
            <Typography variant="body2" className="my-2">
              {blog.content}
            </Typography>
            <Button
              onClick={() => handleDelete(blog.id)}
              variant="outlined"
              color="error"
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogManager;
