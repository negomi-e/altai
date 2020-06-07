const { Schema, model } = require('mongoose');

const VoteSchema = new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    date: Date,
    candidate: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
});

module.exports = model('Vote', VoteSchema);
