const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Altai", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


const vote = require('../Vote');

const votes = [
    {
        author: '5edc3eca2f122d222391c068',
        date: new Date,
        candidate: '5edc3eca2f122d222391c06b',
    },
    {
        author: '5edc3eca2f122d222391c06b',
        date: new Date,
        candidate: '5edc3eca2f122d222391c068',
    },
    {
        author: '5edc3eca2f122d222391c06b',
        date: new Date,
        candidate: '5edc3eca2f122d222391c069',
    },
    {
        author: '5edc3eca2f122d222391c063',
        date: new Date,
        candidate: '5edc3eca2f122d222391c06c',
    },
    {
        author: '5edc3eca2f122d222391c06d',
        date: new Date,
        candidate: '5edc3eca2f122d222391c067',
    },
    {
        author: '5edc3eca2f122d222391c06a',
        date: new Date,
        candidate: '5edc3eca2f122d222391c061',
    },
    {
        author: '5edc3eca2f122d222391c066',
        date: new Date,
        candidate: '5edc3eca2f122d222391c063',
    },
    {
        author: '5edc3eca2f122d222391c06c',
        date: new Date,
        candidate: '5edc3eca2f122d222391c068',
    },
    {
        author: '5edc3eca2f122d222391c062',
        date: new Date,
        candidate: '5edc3eca2f122d222391c061',
    },
    {
        author: '5edc3eca2f122d222391c061',
        date: new Date,
        candidate: '5edc3eca2f122d222391c062',
    },
    {
        author: '5edc3eca2f122d222391c06d',
        date: new Date,
        candidate: '5edc3eca2f122d222391c06c',
    },
    {
        author: '5edc3eca2f122d222391c06c',
        date: new Date,
        candidate: '5edc3eca2f122d222391c06d',
    },
    {
        author: '5edc3eca2f122d222391c064',
        date: new Date,
        candidate: '5edc3eca2f122d222391c065',
    },
    {
        author: '5edc3eca2f122d222391c065',
        date: new Date,
        candidate: '5edc3eca2f122d222391c063',
    },
    {
        author: '5edc3eca2f122d222391c062',
        date: new Date,
        candidate: '5edc3eca2f122d222391c06a',
    },

]


vote.insertMany(votes).then(() => {
    mongoose.connection.close();
  });