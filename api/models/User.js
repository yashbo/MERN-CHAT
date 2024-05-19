const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type:String, unique:true},
    password: String,
}, {timestamp:true})

const userModel=mongoose.model('User', userSchema);
module.exports = userModel;