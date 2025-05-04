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

// ✅ NEW: GET /api/upload – Return list of uploaded images
// router.get("/", (req, res) => {
//   fs.readdir(uploadDir, (err, files) => {
//     if (err) {
//       return res.status(500).json({ message: "Failed to read uploaded files." });
//     }

//     const fileUrls = files.map(file => ({
//       filename: file,
//       url: `https://level-up-talent-detection.onrender.com/uploads/${file}`,
//     }));

//     res.status(200).json(fileUrls);
//   });
// });

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
