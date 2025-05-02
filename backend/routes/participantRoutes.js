const express = require('express');
const router = express.Router();
const ParticipantModel = require('../models/Participant');
// const { registerParticipant } = require('../controllers/participantController');

// POST route to register a participant
router.post('/', async (req, res) => {
    try {
      const newParticipant = new Participant(req.body);
      await newParticipant.save();
      res.status(201).json(newParticipant);
    } catch (error) {
      console.error('Error registering participant:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

// router.post('/', registerParticipant);

// router.get('/', async (req, res) => {
//     try {
//       const participants = await Participant.find();
//       res.json(participants);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

router.get('/', async (req, res) => {
  try {
  const search = (req.query.search || "").toLowerCase();
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const query = {};

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: "i"}},
        { middleName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { telephone: { $regex: search, $options: "i" } },
        { province: { $regex: search, $options: "i" } },
        { district: { $regex: search, $options: "i" } },
        { sector: { $regex: search, $options: "i" } },
        { gender: { $regex: search, $options: "i" } },
        { educationLevel: { $regex: search, $options: "i" } },
        { musicGenre: { $regex: search, $options: "i" } },
        { careerExperience: { $regex: search, $options: "i" } },
        { status: { $regex: search, $options: "i" } },
      ]
    }
    const skip = (page - 1) * limit;

    const [participants, total] = await Promise.all([
      ParticipantModel.find(query).skip(skip).limit(limit).sort({ registrationDate: -1 }),
      ParticipantModel.countDocuments(query),
    ]);

    res.json({
      participants,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Error fetching participants:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
