const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, unique: true },
    token: { type: String, unique: true }
})

mongoose.model('User', userSchema);
