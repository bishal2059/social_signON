const express = require("express");
const { httpLogout } = require("../controller/logout.controller");

const logoutRoute = express.Router();

logoutRoute.get("/", httpLogout);

module.exports = {
  logoutRoute,
};
