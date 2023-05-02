const express = require("express");
const { loginRoute } = require("./routes/login.route");
const { googleRoute } = require("./routes/auth.google");

const app = express();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  CALLBACK_URL: "/auth/google/callback",
};

app.use(express.json());
app.use(express.static("views"));

app.use("/", loginRoute);
app.use("/auth", googleRoute);

module.exports = app;
