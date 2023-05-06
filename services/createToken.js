const jwt = require("jsonwebtoken");
const { config } = require("../config");

const createAccessToken = function (id) {
  const accessToken = jwt.sign({ sub: id }, config.PRIVATE_KEY, {
    expiresIn: 60 * 60 * 24 * 7,
  });
  return accessToken;
};

const createRefreshToken = function (id) {
  const refreshToken = jwt.sign({ sub: id }, config.PRIVATE_KEY, {
    expiresIn: 60 * 60 * 24 * 365,
  });
  return refreshToken;
};

module.exports = {
  createAccessToken,
  createRefreshToken,
};
