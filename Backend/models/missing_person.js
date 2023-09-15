const mongoose = require("mongoose");

const missingPersonSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dateOfBirth: { type: Date, required: true },
  dateMissing: { type: Date, required: true },
  lastSeenLocation: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["Active", "Resolved"], default: "Active" },
  imageUrl: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const MissingPerson = mongoose.model("MissingPerson", missingPersonSchema);

module.exports = MissingPerson;
