const jwt = require("jsonwebtoken");
const { config } = require("../config");

const createAccessToken = function (id) {
  let accessToken;
  jwt.sign(
    { sub: id },
    config.PRIVATE_KEY,
    {
      expiresIn: 60 * 60 * 24 * 7,
    },
    async (err, token) => {
      console.log(token);
      accessToken = token;
      return accessToken;
    }
  );
};

const createRefreshToken = function (id) {
  let refreshToken;
  jwt.sign(
    { sub: id },
    config.PRIVATE_KEY,
    {
      expiresIn: 60 * 60 * 24 * 365,
    },
    (err, token) => {
      refreshToken = token;
    }
  );
  return refreshToken;
};

module.exports = {
  createAccessToken,
  createRefreshToken,
};
