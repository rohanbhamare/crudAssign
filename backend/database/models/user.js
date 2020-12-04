const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:String,
    phone:Number,
    email:String
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;