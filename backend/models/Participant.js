const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

const Participant = mongoose.model('Participant', ParticipantSchema);
module.exports = Participant;
