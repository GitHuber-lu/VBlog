const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true, unique: true },
    role: { type: String },
    token: { type: String }
})

mongoose.model('User', userSchema);
