const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

// Ensure the uploads folder exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

// POST /api/upload
router.post("/", upload.single("photo"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.status(200).json({
    message: "Image uploaded successfully",
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`,
  });
});

// ✅ NEW: GET /api/upload – Return list of uploaded images
router.get("/", (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Failed to read uploaded files." });
    }

    const fileUrls = files.map(file => ({
      filename: file,
      url: `https://level-up-talent-detection.onrender.com/uploads/${file}`,
    }));

    res.status(200).json(fileUrls);
  });
});

router.delete("/image/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "../uploads", filename); // adjust path if needed

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Failed to delete image:", err);
      return res.status(500).json({ message: "Failed to delete image." });
    }

    res.status(200).json({ message: "Image deleted successfully." });
  });
});
module.exports = router;
