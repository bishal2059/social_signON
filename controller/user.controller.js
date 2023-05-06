const { getUser } = require("../models/user.model");
const { createAccessToken } = require("../services/createToken");
const {
  verifyAccessToken,
  verifyRefreshToken,
} = require("../services/verfiyToken");

const httpUser = async function (req, res, next) {
  const { access_token, refresh_token } = req.cookies;
  try {
    let userID, user;
    if (!access_token) {
      userID = await verifyRefreshToken(refresh_token);
      user = await getUser(userID);
      res.cookie("access_token", createAccessToken(user.sub), {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    } else {
      userID = await verifyAccessToken(access_token);
      user = await getUser(userID);
    }
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    next();
  }
};

module.exports = {
  httpUser,
};
