const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  url: String,
  filename: String,
});

const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  paragraph: { type: String, required: true },
  writerName: { type: String },
  date: { type: String, required: true },
  paragraphAlign: { type: String, default: "left" },
  imageAlign: { type: String, default: "left" },
  images: [ImageSchema],
});

const NewsletterSchema = new mongoose.Schema(
  {
    templateIndex: { type: Number, default: 0 },
    sections: [SectionSchema],
    pdfUrl: { type: String }, // optional if PDF is uploaded
  },
  { timestamps: true }
);

module.exports = mongoose.model("Newsletter", NewsletterSchema);
