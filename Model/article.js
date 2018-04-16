const mongoose = require('mongoose')

let articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true}
})

mongoose.model('Article', articleSchema);
