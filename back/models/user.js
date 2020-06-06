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
});

module.exports = model('User', UserSchema);
