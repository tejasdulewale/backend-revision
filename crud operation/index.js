const express = require("express");
const app = express();
// const db = require("./db.js");
const userModel = require("./db.js");
const port = 8000;

app.get("/", (req, res) => {
  res.send("server connected");
});

app.get("/register", async (req, res) => {
  await userModel.create({
    userName: "aarti",
    password: "a@123",
  });
  res.send("user is created");
});

app.get("/users", async (req, res) => {
  let alluser = await userModel.findOne({userName:"tejas"});
  res.send(alluser);
});

app.get("/delete", async(req,res)=>{
  await userModel.findOneAndDelete({userName:"tejas"})
  res.send("user deleted")
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
