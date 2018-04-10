const express = require('express');
const router = express.Router();
const logger = require('../logs/log').logger;
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/insert', function (req, res, next) {
  let user = new User({
    username: 'admin',
    password: '123456'
  })
  user.save(function (err) {
    if (err) {
      logger.error(err);
      res.json({ code: 500, data: null, message: 'insert user failed' });
      return;
    }
    return res.json({ code: 200, data: null });
  })

});

router.get('/login', function (req, res, next) {
  const username = req.query.username;
  const password = req.query.password;
  
  res.send(username + ':' + password);
});

module.exports = router;
