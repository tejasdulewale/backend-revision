const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/mine")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

  const userSchema = new mongoose.Schema({
    userName:String,
    password:String
  })

  module.exports = 
  mongoose.model("user",userSchema)
