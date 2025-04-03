const Participant = require('../models/Participant');

// Register a new participant
const registerParticipant = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newParticipant = new Participant({
      name,
      email,
      phone
    });

    await newParticipant.save();
    res.status(201).json({ message: 'Participant registered successfully', participant: newParticipant });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerParticipant };
