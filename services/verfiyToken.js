const jwt = require("jsonwebtoken");
const { config } = require("../config");

const verifyToken = async function (token) {
  const { payload } = jwt.decode(token, { complete: true });
  const user = {
    email: payload.email,
    email_verified: payload.email_verified,
    name: payload.name,
    picture: payload.picture,
  };
  return user;
};

module.exports = { verifyToken };
