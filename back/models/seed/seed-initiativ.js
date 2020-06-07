const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Altai", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


const initiative = require('../Initiativ');

const inits = [{
    author: '5edc3eca2f122d222391c062',
    date: new Date,
    title: 'Мусор вокруг мусорных баков',
      text: 'Нам нужна более эффективная служба сбора мусора. Мусорные баки всегда переполнены, и это неприемлемо.',
      likes: 5
},
{
    author: '5edc3eca2f122d222391c068',
    date: new Date,
    title: 'Вновь открыть общественные места',
      text: 'Теперь, когда мы больше не находимся в изоляции, почему общественные парки все еще открыты?',
      likes: 25
},
{
    author: '5edc3eca2f122d222391c063',
    date: new Date,
    title: 'Вновь открыть общественные места',
      text: 'Теперь, когда мы больше не находимся в изоляции, почему общественные парки все еще открыты?',
      likes: 25
},
  
]


initiative.insertMany(inits).then(() => {
    mongoose.connection.close();
  });