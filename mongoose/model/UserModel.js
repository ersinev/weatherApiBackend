const mongoose = require('mongoose')
const {Schema} =mongoose
const user = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})

const UserModel = mongoose.model("Users",user)
exports.UserModel=UserModel