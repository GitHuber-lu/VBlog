const express = require('express');
const router = express.Router();
const logger = require('../logs/log').logger;
const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const config = require('../config/config.js');
const jwt = require("jsonwebtoken");

const secret = config.Token.secret;

//发布文章
router.put('/publishArticle', function (req, res, next) {
  const _title = req.body.title;
  const _content = req.body.content;
  const article = new Article({
    title: _title,
    content: _content
  })
  article.save((err, doc) => {
    if (err) {
      logger.error(err);
      return res.json({ code: 'error', data: null, message: '保存文章出错' })
    }
    return res.json({ code: 'success', data: null, message: '发布文章成功' })
  })

});

//获得文章简介列表
router.get('/getArticleIntroList', function (req, res, next) {
  Article.find(function (err, doc) {
    if (err) {
      logger.error(err);
      return res.json({ code: 'error', data: null, message: '查询文章列表出错' })
    }
    let temp = [];
    for (let item of doc) {
      temp.push({ id: item._id, title: item.title, content: item.content.replace(/<[^>]+>/g, '').substring(0, 120) + '...' })
    }
    return res.json({ code: 'success', data: temp, message: '获取文章列表成功' })
  })

});

//获得文章详情
router.get('/getArticleDetail', function (req, res, next) {
  const id = req.query.id;
  Article.findOne({ _id: id }, function (err, doc) {
    if (err) {
      logger.error(err);
      return res.json({ code: 'error', data: null, message: '获取文章详情出错' })
    }
    return res.json({ code: 'success', data: doc, message: '获取文章详情成功' })
  })

});

//更新文章详情
router.post('/updateArticleDetail', function (req, res, next) {
  const id = req.body.id;
  const _title = req.body.title;
  const _content = req.body.content;
  Article.update({ _id: id }, { title: _title, content: _content }, function (err, doc) {
    if (err) {
      logger.error(err);
      return res.json({ code: 'error', data: null, message: '更新文章失败' })
    }
    return res.json({ code: 'success', data: doc, message: '更新文章成功' })
  })

});

//删除文章
router.post('/deleteArticle', function (req, res, next) {
  const id = req.body.id;
  // const _token = req.headers.token;

  // jwt.verify(_token, secret, function (err, decoded) {
  //   if (err) {
  //     logger.error(err);
  //     res.json({ code: 'error', data: null, message: 'Token未通过验证' });
  //     return;
  //   }
  // });
  Article.remove({ _id: id }, function (err, doc) {
    if (err) {
      logger.error(err);
      return res.json({ code: 'error', data: null, message: '删除文章失败' })
    }
    return res.json({ code: 'success', data: doc, message: '删除文章成功' })
  })

});

module.exports = router;