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
module.exports = router;
