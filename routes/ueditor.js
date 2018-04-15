const express = require('express');
const router = express.Router();
const logger = require('../logs/log').logger;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const ueditor = require("ueditor");
const path = require('path');

//ueditor 上传
router.all("/ue", ueditor('public', function (req, res, next) {
  var dir = '/upload/image/'
  const actionType = req.query.action;
  if (actionType === 'uploadimage' || actionType === 'uploadfile' || actionType === 'uploadvideo') {
    let fileUrl = dir;
    if (actionType === 'uploadfile') {
      fileUrl = '/upload/file/'; 
    }
    if (actionType === 'uploadvideo') {
      fileUrl = '/upload/video/';
    }
    res.ue_up(fileUrl); 
    res.setHeader('Content-Type', 'text/html');
  }else if (req.query.action === 'listimage') {
    res.ue_list(dir); 
  }else {
    res.setHeader('Content-Type', 'application/json');
    res.redirect('/ueditor/ueditor.config.json');
  }
}));

module.exports = router;