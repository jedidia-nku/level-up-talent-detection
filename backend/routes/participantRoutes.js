const express = require('express');
const router = express.Router();
const { registerParticipant } = require('../controllers/participantController');

// POST route to register a participant
router.post('/register', registerParticipant);

module.exports = router;
