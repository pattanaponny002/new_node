const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});
router.get("/test", (req, res) => {
  res.json({ test: "home", master: 66 });
});

module.exports = router;
