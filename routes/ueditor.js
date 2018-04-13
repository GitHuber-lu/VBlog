const express = require('express');
const router = express.Router();
const logger = require('../logs/log').logger;
const mongoose = require('mongoose');
const User = mongoose.model('User');

//上传图片
router.get('/upload', function (req, res, next) {
  const _username = req.query.username;
  const _password = req.query.password;
  User.findOne({ username: _username }, function (err, doc) {
    if (err) {
      logger.error(err);
      res.json({ code: 600, data: null, message: '查询失败' });
      return;
    }
    if (doc) {
      bcrypt.compare(_password, doc.password, function (err, flag) {
        if (flag) {
          const _token = jwt.sign({ name: _username }, 'config.Token.secret', {
            expiresIn: config.Token.expires
          });
          return res.json({ code: 200, data: { token: _token }, message: '验证通过' });
        }
        return res.json({ code: 600, data: null, message: '用户名或密码错误' });
      });
    }else{
      return res.json({ code: 600, data: null, message: '用户名或密码错误' });
    }
  })

});

module.exports = router;