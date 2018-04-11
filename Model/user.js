const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: String,
    password: String
})

// userSchema.static('methodName', function(username, password){
    
// })

// userSchema.methods.methodName = function(){

// };

mongoose.model('User', userSchema);
