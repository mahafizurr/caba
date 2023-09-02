const express = require("express");
const multer = require("multer");

const app = express();

app.get("/", (req, res) => {
  res.json({ massage: "Welcome" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started port number ${port}`);
});
