const express = require("express");
const { httpLogin } = require("../controller/login.controller");

const loginRoute = express.Router();
loginRoute.get("/", httpLogin);

module.exports = {
  loginRoute,
};
