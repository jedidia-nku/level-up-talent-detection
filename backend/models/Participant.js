const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  province: { type: String, required: true },
  district: { type: String, required: true },
  sector: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
  careerExperience: { type: String, required: true },
  educationLevel: { type: String, required: true, enum: ['Secondary', 'Bachelor', 'Masters', 'PhD'] },
  musicGenre: { type: String, required: true, enum: ['Rap', 'Gospel', 'R&B', 'Afrobeat', 'Other'] },
  registrationDate: { type: Date, default: Date.now }
});

const Participant = mongoose.model('Participant', ParticipantSchema);
module.exports = Participant;
