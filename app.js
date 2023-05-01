const express = require("express");
const { loginRoute } = require("./routes/login.route");

const app = express();

app.use(express.json());
app.use(express.static("views"));

app.use("/", loginRoute);

module.exports = app;
