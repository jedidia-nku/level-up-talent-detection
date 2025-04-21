const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const participantRoutes = require('./routes/participantRoutes');
const contactRoutes = require("./routes/contact");
const uploadRoutes = require('./routes/uploadRoutes');
const newsRoutes = require("./routes/newsRoutes");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/register', participantRoutes);
app.use("/api/contact", contactRoutes);
app.use('/api/upload', uploadRoutes);
app.use("/api/news", newsRoutes);

// Serve uploaded images statically
app.use('/uploads', express.static('uploads'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
