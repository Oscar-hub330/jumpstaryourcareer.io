import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
  title: String,
  date: String,
  paragraph: String,
  paragraphAlign: { type: String, default: "left" },
  imageAlign: { type: String, default: "left" },
  writerName: String,
  images: [
    {
      filename: String,
      url: String,
    },
  ],
});

const NewsletterSchema = new mongoose.Schema({
  templateIndex: Number,
  sections: [SectionSchema],
  pdfPath: String,
  publishType: { type: String, enum: ["content", "pdf", "both"] },
  publishedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Newsletter", NewsletterSchema);
