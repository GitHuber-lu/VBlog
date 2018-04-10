const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: String,
    password: String
})

//校验用户名和密码
userSchema.static('validateUser', function(username, password){
    
})

userSchema.methods.validateUser = function(){

};

mongoose.model('User', userSchema);
