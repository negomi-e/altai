const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });
    if (user) {
      const pass = await bcrypt.compare(password, user.password);
      if (pass) {
        req.session.user = user;
        res.json({
          success: true,
          id: user._id,
        });
      } else {
        res.json({
          err: 'Неправильный пароль',
        });
      }
    } else {
      res.json({
        err: 'Такого пользователя не существует',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const { phone, name, password } = req.body;
    const user = await User.findOne({ phone });
    if (user) {
      res.json({
        err: 'Такой пользователь уже существует',
      });
    } else {
      const newUser = await new User({ 
        phone,
        name,
        password: await bcrypt.hash(password, 10),
      }).save();
      req.session.user = newUser;
      res.json({
        success: true,
        id: newUser._id,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({
      success: true,
    });
  });
});

module.exports = router;

