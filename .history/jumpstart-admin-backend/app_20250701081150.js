// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const blogRoutes = require("./routes/blogRoutes");
const eventRoutes = require("./routes/eventRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");

const eventRoutes = require("./routes/eventRoutes");
app.use("/api/events", eventRoutes);


const app = express();
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/blogs", blogRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/subscribers", subscriberRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
