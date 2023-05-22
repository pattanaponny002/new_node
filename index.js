const express = require("express");
const home_api = require("./routers/home");
const town_api = require("./routers/town");
const app = express();

const port = 4001;

app.use("/home/api", home_api);
app.use("/town/api", town_api);

app.listen(port, () => console.log("server is running", port));
