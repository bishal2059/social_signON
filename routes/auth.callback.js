const express = require("express");
const { callbackHandler } = require("../controller/callback.controller");

const callbackRoute = express.Router();

callbackRoute.get("/google/callback", callbackHandler);

module.exports = {
  callbackRoute,
};
