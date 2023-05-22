const express = require("express");

const router = express.Router();
const UserNew = require("../models/User");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/newTest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conntected newTestDB"));
router.get("/", (req, res) => {
  res.send("hello");
});
router.get("/test", (req, res) => {
  res.json({ test: "home", master: 66 });
});
router.get("/add", async (req, res) => {
  const result = await UserNew.create({
    username: "testHomeSuccess",
    password: "testHomeSuccess",
  });

  res.json({ test: "home", result });
});

module.exports = router;
