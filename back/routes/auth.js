const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator/check')
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
          status: user.status,
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

router.post('/register', body('phone').isMobilePhone(['ru-RU']), async (req, res) => {
  try {
    const { phone, name, password } = req.body;
    const user = await User.findOne({ phone });

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.json({
        err: 'Введите корректный номер телефона'
      })
    }

    const altaiNumbers = [
      '385', '901', '902', '903', '905', '906', '909', '913', '923', '929', '933', '952', '953', '958', '960',
      '961', '962', '963', '964', '967', '983', '991', '996', '999'
    ]
    if (req.body.phone[0] === '8'){
      if (!altaiNumbers.includes(req.body.phone.slice(1, 4))) {
        res.json({
          err: 'Введите номер алтайского оператора'
        })
      }
    }
    if (req.body.phone[0] === '+'){
      if (!altaiNumbers.includes(req.body.phone.slice(2, 5))) {
        res.json({
          err: 'Введите номер, зарегистрированный в Алтайском крае'
        })
      }
    }

    if (user) {
    res.json({
      err: 'Введите номер, зарегистрированный в Алтайском крае',
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

