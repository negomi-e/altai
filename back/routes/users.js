var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Init = require('../models/Initiativ');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ user });
  } catch (e) {
    console.log(e);
  }
});

router.post('/addinit', async (req, res) => {
  try {
    const { userId, title, body } = req.body.product;
    const init = new Init({
      author: userId,
      date: new Date(),
      title,
      text: body,
    })
    await init.save();
    const user = await User.findById(userId);
    user.initativ.push(init);
    await user.save();
    res.json({ user });
  } catch (e) {
    console.log(e);
  }
})

router.get('/all/1', async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (e) {
    console.log(e);
  }
});

router.get('/leaders/1', async (req, res) => {
  console.log('here')
  try {
    const leaders = await User.find({'position': 'leader'});
    // console.log('leaders', leaders)
    res.json({ leaders });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
