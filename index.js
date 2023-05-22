const express = require("express");
const home_api = require("./routers/home");
const town_api = require("./routers/town");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use("/home/api", home_api);
app.use("/town/api", town_api);

app.listen(process.env.PORT || 4001, () =>
  console.log("server is running", process.env.PORT)
);
