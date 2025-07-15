const multer = require("multer");
const path = require("path");

// Set up storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype === "application/pdf") {
      cb(null, "uploads/pdfs");
    } else {
      cb(null, "uploads/images");
    }
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

module.exports = upload;
