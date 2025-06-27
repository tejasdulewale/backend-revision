const express = require("express");
const path = require("path");
const app = express();
const port = 1000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "frontend")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "login.html"));
});


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
