const express = require("express");
const userModel  =require('./db.js')
const path = require('path')
const app = express();
const port = 2000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"frontend")))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","index.html"))
})
app.get('/register',(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","register.html"))
})

app.post('/register',async(req,res)=>{
    await userModel.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    res.send("user created")
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    
})