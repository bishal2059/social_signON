const express = require("express");

const googleRoute = express.Router();

googleRoute.get("/");

module.exports = {
  googleRoute,
};
