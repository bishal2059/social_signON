const jwt = require("jsonwebtoken");
const { config } = require("../config");

const verifyToken = async function (token) {
  const { payload } = jwt.decode(token, { complete: true });
  // console.log(payload);
  const user = {
    email: payload.email,
    email_verified: payload.email_verified,
    name: payload.name,
    picture: payload.picture,
    sub: payload.sub,
  };
  return user;
};

const verifyAccessToken = async function (token) {
  try {
    const { sub } = jwt.verify(token, config.PRIVATE_KEY);
    return sub;
  } catch (err) {
    console.log(err);
    throw new Error("Access Token unverified!!");
  }
};
const verifyRefreshToken = async function (token) {
  try {
    const { sub } = jwt.verify(token, config.PRIVATE_KEY);
    return sub;
  } catch (err) {
    console.log(err);
    throw new Error("Access Token unverified!!");
  }
};

module.exports = { verifyToken, verifyAccessToken, verifyRefreshToken };
