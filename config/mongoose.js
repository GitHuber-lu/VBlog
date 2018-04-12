const mongoose = require('mongoose');
const config = require('./config.js');

module.exports = function() {
    const db = mongoose.connect(config.Mongodb);
    require('../Model/user.js');
    return db;
}