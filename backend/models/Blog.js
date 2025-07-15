const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String }, // path to the uploaded image
    pdfUrl: { type: String },   // path to the uploaded PDF
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
