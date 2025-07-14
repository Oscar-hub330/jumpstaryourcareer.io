import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Newsletter from "../models/Newsletter.js";
import Subscriber from "../models/Subscriber.js";
import sendEmailToSubscribers from "../utils/mailer.js";

const router = express.Router();

// Set up storage for PDF
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/newsletters";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, `newsletter_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });

router.post("/publish", upload.single("pdf"), async (req, res) => {
  try {
    const content = JSON.parse(req.body.content);
    const publishType = req.body.publishType;
    const pdfPath = req.file ? req.file.path : null;

    const newNewsletter = new Newsletter({
      templateIndex: 0,
      sections: content,
      publishType,
      pdfPath,
    });

    await newNewsletter.save();

    // Fetch all subscriber emails
    const subscribers = await Subscriber.find({});
    const emails = subscribers.map((s) => s.email);

    // Send notification
    await sendEmailToSubscribers(emails, newNewsletter);

    res.json({ message: "Newsletter published successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to publish newsletter" });
  }
});

export default router;
