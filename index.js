const express = require("express");

const app = express();

const port = 4001;
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/test", (req, res) => {
  res.send("test");
});
app.listen(port, () => console.log("server is running", port));
