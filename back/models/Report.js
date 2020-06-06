const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
  report: {
    type: Object,
  },
  createdAt: {
    type: new Date,
  },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Report', ReportSchema );
