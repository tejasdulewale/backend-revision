const mongoose = require("mongoose");


// connect to mongo db
mongoose
  .connect("mongodb://127.0.0.1:27017/practice")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });


  // creating schema

  const userSchema = new mongoose.Schema({
    userName:String,
    password:String,
    phoneno: Number
  })

  //creating model

  const userModel = mongoose.model("user",userSchema)

  module.exports = userModel