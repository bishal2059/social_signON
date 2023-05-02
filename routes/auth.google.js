const express = require("express");
const { authGoogle } = require("../controller/googleLogin.controller");

const googleRoute = express.Router();

googleRoute.get("/google", authGoogle);

module.exports = {
  googleRoute,
};
