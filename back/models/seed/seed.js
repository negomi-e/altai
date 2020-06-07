const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Altai", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


const user = require('../user');

const users = [
  {  phone: 79189999999,
  name: 'Евгений',
  password: '12345',
  expert: false,
  leader: {
    status: false,
    start: new Date(),
    finish: new Date(),
  },
  education: 'MGU',
  experience: 
    ['Worked at McDonalds']
  ,
  publicActivity: ['Cleaning'],
  socialNetwork: '@jeremy',
  votes: {
    type: Array,
  },
  bio: 'Я родился и вырос в местном городе. Я бы никогда не захотел жить где-то еще. Горы, реки, люди-чего еще можно желать. Охранять его. Я хочу видеть больше инициатив по защите нашей чистой, чистой сельской местности',
  region: 'Altai',

position: 'helper'}, 
{  phone: 79189999990,
    name: 'Алекс',
    password: '12345',
    expert: true,
    leader: {
      status: false,
      start: new Date(),
      finish: new Date(),
    },
    education: 'бизнес-школа',
    experience: 'Сбербанк',
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
    bio: 'Мне нравится бизнес,мне нравится эффективность, мне нравится строить сообщество.',
    region: 'Altai',

position: 'helper'  },
  {  phone: 79189999991,
    name: 'Элизабет',
    password: '12345',
    expert: true,
    leader: {
      status: false,
      start: new Date(),
      finish: new Date(),
    },
    education: 'Аспирант',
    experience: 'Гринпис',
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
    bio: 'Я страстный защитник окружающей среды. Давайте спасем планету, пока у нас еще есть шанс!',
    region: 'Altai',

position: 'amateur'  },
  {  phone: 79189999992,
    name: 'Ekaterina',
    password: '12345',
    expert: false,
    leader: {
      status: false,
      start: new Date(),
      finish: new Date(),
    },
    education: 'MGU',
    experience: 
      ['Worked at McDonalds']
    ,
    publicActivity: ['Cleaning'],
    socialNetwork: '@jeremy',
    votes: {
      type: Array,
    },
    bio: 'Я родился и вырос в местном городе. Я бы никогда не захотел жить где-то еще. Горы, реки, люди-чего еще можно желать. Охранять его. Я хочу видеть больше инициатив по защите нашей чистой, чистой сельской местности',
    region: 'Altai',

position: 'launch'  }, 
  {  phone: 79189999993,
      name: 'Денис',
      password: '12345',
      expert: true,
      leader: {
        status: false,
        start: new Date(),
        finish: new Date(),
      },
      education: 'бизнес-школа',
      experience: 'Сбербанк',
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
      bio: 'Мне нравится бизнес,мне нравится эффективность, мне нравится строить сообщество.',
      region: 'Altai',

position: 'leader'    },
    {  phone: 79189999994,
      name: 'Альберт',
      password: '12345',
      expert: true,
      leader: {
        status: false,
        start: new Date(),
        finish: new Date(),
      },
      education: 'Аспирант',
      experience: 'Гринпис',
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
      bio: 'Я страстный защитник окружающей среды. Давайте спасем планету, пока у нас еще есть шанс!',
      region: 'Altai',

position: 'mentor'    },
    {  phone: 79189999901,
      name: 'Питер',
      password: '12345',
      expert: false,
      leader: {
        status: false,
        start: new Date(),
        finish: new Date(),
      },
      education: 'MGU',
      experience: 
        ['Worked at McDonalds']
      ,
      publicActivity: ['Cleaning'],
      socialNetwork: '@jeremy',
      votes: {
        type: Array,
      },
      bio: 'Я родился и вырос в местном городе. Я бы никогда не захотел жить где-то еще. Горы, реки, люди-чего еще можно желать. Охранять его. Я хочу видеть больше инициатив по защите нашей чистой, чистой сельской местности',
      region: 'Altai',

position: 'leader'    }, 
    {  phone: 79189999902,
        name: 'Ольга',
        password: '12345',
        expert: true,
        leader: {
          status: false,
          start: new Date(),
          finish: new Date(),
        },
        education: 'бизнес-школа',
        experience: 'Сбербанк',
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
        bio: 'Мне нравится бизнес,мне нравится эффективность, мне нравится строить сообщество.',
        region: 'Altai',
position: 'mentor'      },
      {  phone: 79189999903,
        name: 'Алона',
        password: '12345',
        expert: true,
        leader: {
          status: false,
          start: new Date(),
          finish: new Date(),
        },
        education: 'Аспирант',
        experience: 'Гринпис',
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
        bio: 'Я страстный защитник окружающей среды. Давайте спасем планету, пока у нас еще есть шанс!',
        region: 'Altai',
position: 'launch'
      },
      {  phone: 79189999904,
        name: 'Саша',
        password: '12345',
        expert: false,
        leader: {
          status: false,
          start: new Date(),
          finish: new Date(),
        },
        education: 'MGU',
        experience: 
          ['Worked at McDonalds']
        ,
        publicActivity: ['Cleaning'],
        socialNetwork: '@jeremy',
        votes: {
          type: Array,
        },
        bio: 'Я родился и вырос в местном городе. Я бы никогда не захотел жить где-то еще. Горы, реки, люди-чего еще можно желать. Охранять его. Я хочу видеть больше инициатив по защите нашей чистой, чистой сельской местности',
        region: 'Altai',
position: 'mentor' 
     }, 
      {  phone: 79189999905,
          name: 'Феликс',
          password: 12345,
          expert: true,
          leader: {
            status: false,
            start: new Date(),
            finish: new Date(),
          },
          education: 'бизнес-школа',
          experience: 'Сбербанк',
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
          bio: 'Мне нравится бизнес,мне нравится эффективность, мне нравится строить сообщество.',
          region: 'Altai',

        position: 'launch'
              },
        {  phone: 79189999906,
          name: 'Артем',
          password: 12345,
          expert: true,
          leader: {
            status: false,
            start: new Date(),
            finish: new Date(),
          },
          education: 'Аспирант',
          experience: 'Гринпис',
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
          bio: 'Я страстный защитник окружающей среды. Давайте спасем планету, пока у нас еще есть шанс!',
          region: 'Altai',
          position: 'amateur'
        }
]


user.insertMany(users).then(() => {
    mongoose.connection.close();
  });