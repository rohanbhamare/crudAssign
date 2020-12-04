const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/usersDb", {useNewUrlParser:true,useUnifiedTopology:true}, ()=>{
    console.log(" mongo database connection succeded...")
});

module.exports = mongoose;