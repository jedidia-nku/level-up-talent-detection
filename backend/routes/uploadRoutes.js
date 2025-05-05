const express = require("express");
const multer = require("multer");
const path = require("path");
const cloudinary = require('../utils/cloudinary');
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
router.post("/", upload.single("photo"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

   // Upload to Cloudinary
   const result = await cloudinary.uploader.upload(req.file.path, {
     folder: "level-up-images", // Optional: set a Cloudinary folder
   });
  
   // Delete local file after upload
   fs.unlinkSync(req.file.path);

  res.status(200).json({
    message: "Image uploaded successfully",
    url: result.secure_url,
    public_id: result.public_id,
  });
});

// ✅ GET /api/upload – Get list of images from Cloudinary
router.get("/", async (req, res) => {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "level-up-images",
      max_results: 10,
    });

    const fileUrls = result.resources.map((file) => ({
      public_id: file.public_id,
      url: file.secure_url,
    }));

    res.status(200).json(fileUrls);
  } catch (err) {
    console.error("Error fetching Cloudinary images:", err);
    res.status(500).json({ message: "Failed to fetch images from Cloudinary." });
  }
});

// ✅ Delete image from Cloudinary
router.delete("/image", async (req, res) => {
  const publicId = req.query.public_id;

  if (!publicId || typeof publicId !== "string") {
    return res.status(400).json({ message: "Invalid public_id." });
  }

  try {
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === "ok") {
      return res.status(200).json({ message: "Image deleted successfully." });
    } else {
      return res.status(400).json({ message: "Failed to delete image from Cloudinary." });
    }
  } catch (err) {
    console.error("Cloudinary delete error:", err);
    res.status(500).json({ message: "Server error while deleting image." });
  }
});

module.exports = router;
