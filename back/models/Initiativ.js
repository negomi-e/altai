const { Schema, model } = require('mongoose');

const InitSchema = new Schema({

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: Date,
  title: String,
  text: String,
  likes: Number

});

module.exports = model('Init', InitSchema);
