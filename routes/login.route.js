const express = require("express");
const { httpLogin } = require("../controller/login.controller");
const { httpUser } = require("../controller/user.controller");

const loginRoute = express.Router();
loginRoute.get("/", httpUser, httpLogin);

module.exports = {
  loginRoute,
};
