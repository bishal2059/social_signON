const express = require("express");
const { authFailed } = require("../controller/failure.controller");

const failureRoute = express.Router();

failureRoute.get("/google/failed", authFailed);

module.exports = {
  failureRoute,
};
