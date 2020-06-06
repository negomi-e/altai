const { Schema, model } = require('mongoose');

const ReportSchema = new Schema({
  report: {
    type: Object,
  }
});

module.exports = model('Report', ReportSchema );
