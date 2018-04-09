const express = require('express');
const router = express.Router();
const logger = require('../logs/log').logger;

router.get('/login', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  res.send(username+password);
});

module.exports = router;
