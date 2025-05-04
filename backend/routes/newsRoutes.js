const express = require("express");
const multer = require("multer");
const path = require("path");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs");
const News = require("../models/News");

const router = express.Router();

// Multer config for local uploads (temporary storage)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  }
});
const upload = multer({ storage: storage });

// @route POST /api/news → Create news with image
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "News-images",
    });

    // Delete local file after upload
    fs.unlinkSync(req.file.path);

    const newNews = new News({
      title,
      description,
      imageUrl: result.secure_url, // Use Cloudinary URL
      imagePublicId: result.public_id, // Save public_id if you want to delete/update it later
    });

    await newNews.save();

    res.status(201).json({ message: "News created successfully", news: newNews });
  } catch (error) {
    console.error("Error creating news:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route GET /api/news → Fetch all news
router.get("/", async (req, res) => {
  try {
    const allNews = await News.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(allNews);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route GET /api/news/:id → Fetch one news item
router.get("/:id", async (req, res) => {
  try {
    const newsItem = await News.findById(req.params.id);
    if (!newsItem) return res.status(404).json({ message: "News not found" });

    res.status(200).json(newsItem);
  } catch (error) {
    console.error("Error fetching single news:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route PUT /api/news/:id → Update news (with optional new image)
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    // If a new image is uploaded
    if (req.file) {
      // Delete old image from Cloudinary (if you stored public_id)
      if (news.imagePublicId) {
        await cloudinary.uploader.destroy(news.imagePublicId);
      }

      // Upload new image
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "News-images",
      });

      // Delete local file
      fs.unlinkSync(req.file.path);

      news.imageUrl = result.secure_url;
      news.imagePublicId = result.public_id;
    }

    // Update text fields
    if (title) news.title = title;
    if (description) news.description = description;

    await news.save();

    res.status(200).json({ message: "News updated", news });
  } catch (error) {
    console.error("Error updating news:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route DELETE /api/news/:id → Delete news and associated image
router.delete("/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    // Delete from Cloudinary if image exists
    if (news.imagePublicId) {
      await cloudinary.uploader.destroy(news.imagePublicId);
    }

    await news.deleteOne();

    res.status(200).json({ message: "News deleted" });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
