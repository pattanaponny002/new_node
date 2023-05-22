const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("town");
});
router.get("/test", (req, res) => {
  res.json({ test: "town", master: 66 });
});

module.exports = router;
