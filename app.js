const express = require("express");
const { loginRoute } = require("./routes/login.route");
const { googleRoute } = require("./routes/auth.google");
const { callbackRoute } = require("./routes/auth.callback");
const { failureRoute } = require("./routes/failure.route");

const app = express();

app.use(express.json());
app.use(express.static("views"));

app.use("/", loginRoute);
app.use("/auth", googleRoute);
app.use("/auth", callbackRoute);
app.use("/auth", failureRoute);

module.exports = app;
