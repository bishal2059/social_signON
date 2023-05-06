const express = require("express");
const {
  callbackHandler,
  responseHandler,
} = require("../controller/callback.controller");

const callbackRoute = express.Router();

callbackRoute.get("/google/callback", callbackHandler, responseHandler);

module.exports = {
  callbackRoute,
};
