const express = require('express');
const router = express.Router();
const Participant = require('../models/Participant');
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

router.get('/', async (req, res) => {
    try {
      const participants = await Participant.find();
      res.json(participants);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
