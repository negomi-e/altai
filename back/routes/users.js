var express = require('express');
var router = express.Router();
const User = require('../models/user');
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

module.exports = router;
