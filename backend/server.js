const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

try {
  const newslettersRouter = require("./routes/newsletters");
  app.use("/api/newsletters", newslettersRouter);
} catch (err) {
  console.error("Error loading newsletters router:", err);
}

try {
  const blogsRouter = require("./routes/blogs");
  app.use("/api/blogs", blogsRouter);
} catch (err) {
  console.error("Error loading blogs router:", err);
}

try {
  const subscribersRouter = require("./routes/subscribers");
  app.use("/api/subscribers", subscribersRouter);
} catch (err) {
  console.error("Error loading subscribers router:", err);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
