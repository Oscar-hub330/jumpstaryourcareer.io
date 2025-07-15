const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const upload = require("../middlewares/upload");

// POST: Create a new blog
router.post("/", upload.fields([
  { name: "image", maxCount: 1 },
  { name: "pdf", maxCount: 1 }
]), async (req, res) => {
  try {
    const { title, description } = req.body;

    const imageFile = req.files["image"] ? req.files["image"][0] : null;
    const pdfFile = req.files["pdf"] ? req.files["pdf"][0] : null;

    const blog = new Blog({
      title,
      description,
      imageUrl: imageFile ? `/uploads/images/${imageFile.filename}` : "",
      pdfUrl: pdfFile ? `/uploads/pdfs/${pdfFile.filename}` : "",
    });

    await blog.save();
    res.status(201).json({ message: "Blog saved successfully", blog });
  } catch (err) {
    console.error("Error saving blog:", err);
    res.status(500).json({ error: "Failed to save blog" });
  }
});

// GET: Fetch all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

module.exports = router;
