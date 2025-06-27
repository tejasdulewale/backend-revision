const express = require('express')
const app = express()

const db = require('./db.js')
const port  = 9000

app.get('/',(req,res)=>{
    res.send("server started")
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    
})