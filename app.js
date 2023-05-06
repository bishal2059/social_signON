const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { loginRoute } = require("./routes/login.route");
const { googleRoute } = require("./routes/auth.google");
const { callbackRoute } = require("./routes/auth.callback");
const { failureRoute } = require("./routes/failure.route");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "views")));

app.use(cookieParser());

app.use("/", loginRoute);
app.use("/auth", googleRoute);
app.use("/auth", callbackRoute);
app.use("/auth", failureRoute);

module.exports = app;
