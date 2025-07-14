const express = require("express");
const router = express.Router();
const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// GET all blogs
router.get("/", getBlogs);

// POST a new blog
router.post("/", createBlog);

// PUT update blog
router.put("/:id", updateBlog);

// DELETE blog
router.delete("/:id", deleteBlog);

module.exports = router;
