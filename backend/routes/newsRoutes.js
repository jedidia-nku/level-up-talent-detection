const express = require("express");
const multer = require("multer");
const path = require("path");
const News = require("../models/News");

const router = express.Router();

// Multer config
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

// @route POST /api/news
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newNews = new News({ title, description, imageUrl });
    await newNews.save();

    res.status(201).json({ message: "News created successfully", news: newNews });
  } catch (error) {
    console.error("Error creating news:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/news → Fetch all news
router.get("/", async (req, res) => {
  try {
    const allNews = await News.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(allNews);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/news/:id
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

// @route PUT /api/news/:id → Update existing news
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedFields = { title, description };

    if (req.file) {
      updatedFields.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updatedNews = await News.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );

    if (!updatedNews) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json({ message: "News updated", news: updatedNews });
  } catch (error) {
    console.error("Error updating news:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);
    if (!deletedNews) {
      return res.status(404).json({ message: "News not found" });
    }
    res.status(200).json({ message: "News deleted" });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
