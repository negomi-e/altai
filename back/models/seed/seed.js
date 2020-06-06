const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Altai", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


const user = require('../user');

const users = [
  {  phone: 79189999999,
  name: 'Jeremy',
  password: '12345',
  expert: true,
  leader: {
    status: false,
    start: new Date(),
    finish: new Date(),
  },
  education: 'MGU',
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
  bio: 'I love long walks by the beach',
  region: 'Altai'
}, 
{  phone: 79189999990,
    name: 'Phoebe',
    password: '12345',
    expert: true,
    leader: {
      status: false,
      start: new Date(),
      finish: new Date(),
    },
    education: 'MGUX',
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
    bio: 'I hate long walks by the beach',
    region: 'Altai'
  }
]
    
user.insertMany(users).then(() => {
    mongoose.connection.close();
  });