const { Schema, model } = require('mongoose');

const VoteSchema = new Schema({
  vote: {
    author: String,
    date: Date,
    candidate: String,
  }
});

module.exports = model('Vote', VoteSchema);
