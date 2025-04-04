const Participant = require('../models/Participant');

// Register a new participant
const registerParticipant = async (req, res) => {
  const {
    firstName,
    middleName,
    lastName,
    age,
    province,
    district,
    sector,
    telephone,
    email,
    gender,
    careerExperience,
    educationLevel,
    musicGenre,
    registrationDate} = req.body;

  try {
    const newParticipant = new Participant({
      firstName,
      middleName,
      lastName,
      age,
      province,
      district,
      sector,
      telephone,
      email,
      gender,
      careerExperience,
      educationLevel,
      musicGenre,
      registrationDate,
    
        });

    await newParticipant.save();
    res.status(201).json({ message: 'Participant registered successfully', participant: newParticipant });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerParticipant };
