const fs = require("fs");

// fs.writefile params
// 1. "fileName"
// 2. "filecontent"
// 3.(err)=>{}

fs.writeFile("index.html", "hi my name is tejas", (err) => {
  console.log(err);
});

// fs.unlink params

// 1. "fileName"
// 2. (err)=>{}
fs.unlink("index.html", (err) => {
  console.log(err);
});

// fs.appendFile = update the file content

// 1. "fileName"
// 2. "filecontent"
// 3. (err)=>{}

fs.appendFile("script.js", "iam 23 years of old ", (err) => {
  console.log(err);
});



// fs.rename

// 1."old file name"
// 2."new file name"
// 3.(err)=>{}


    fs.rename("script.js","tejas.txt",(err)=>{
        console.log(err);
        
    })