const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/alluserdata").then(()=>{
    console.log("connected");
    
}).catch((err)=>{
    console.log("something went wrong",err);
    
})


const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const userModel = mongoose.model("user",userSchema)
module.exports = userModel