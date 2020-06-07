const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  phone: {
    type: String, required: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String, required: true,
  },
  expert: {
    type: Boolean, default: false,
  },
  leader: {
    status: { type: Boolean, default: false },
    start: { type: Date },
    finish: { type: Date },
  },
  education: {
    type: String,
  },
  experience: {
    type: Array,
  },
  publicActivity: {
    type: Array,
  },
  socialNetwork: {
    type: Array,
  },
  reports: {
    type: Array,
  },
  votes: {
    type: Array,
  },
  bio: {
    type: String,
  },
  region: {
    type: String,
  },
  initativ: {
    type: Array,
    default: [],
  },
  position:{
    type: String
  }
});

module.exports = model('User', UserSchema);
