const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { loginRoute } = require("./routes/login.route");
const { googleRoute } = require("./routes/auth.google");
const { callbackRoute } = require("./routes/auth.callback");
const { failureRoute } = require("./routes/failure.route");
const { logoutRoute } = require("./routes/logout.route");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser());
app.use("/", express.static(path.join(__dirname, "public")));

app.use(cookieParser());

app.use("/", loginRoute);
app.use("/logout", logoutRoute);
app.use("/auth", googleRoute);
app.use("/auth", callbackRoute);
app.use("/auth", failureRoute);

module.exports = app;
