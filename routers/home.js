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

///http://localhost:4001/home/api/add work perfectly find.!!
///https://new-node-fp4am1plv-pattanaponny002.vercel.app/home/api/add
///504: GATEWAY_TIMEOUT
// Code: FUNCTION_INVOCATION_TIMEOUT
// ID: hkg1::p5zfx-1684758148349-b1b8f3952e1f
router.get("/add", async (req, res) => {
  const result = await UserNew.create({
    username: "testHomeSuccess",
    password: "testHomeSuccess",
  });
  console.log("adding");

  res.json({ test: "home", result });
});

module.exports = router;
