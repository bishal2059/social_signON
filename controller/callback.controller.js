const { upsertUser } = require("../models/user.model");
const {
  createAccessToken,
  createRefreshToken,
} = require("../services/createToken");
const { getGoogleToken } = require("../services/getGoogleToken");
const { verifyToken } = require("../services/verfiyToken");
const path = require("path");

const callbackHandler = async function (req, res, next) {
  //get code from qs
  const code = req.query.code;
  // console.log(code);
  try {
    //get id and accessToken with the code
    const { access_token, id_token } = await getGoogleToken(code);
    // console.log(id_token);

    //get user with tokens
    const user = await verifyToken(id_token);

    //upsert the user
    // console.log(user);
    if (!user.email_verified) {
      return res
        .status(403)
        .sendFile(
          path.join(__dirname, "..", "views", "markup", "unverified.html")
        );
    }
    const userCode = await upsertUser({
      email: user.email,
      name: user.name,
      picture: user.picture,
      verfied: user.verfied,
      sub: user.sub,
    });

    //create Access and Refresh Token
    res.cookie("access_token", createAccessToken(userCode), {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
    res.cookie("refresh_token", createRefreshToken(userCode), {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      httpOnly: true,
    });

    next();
  } catch (error) {
    console.log(error, "Google Authorization failed");
    return res.redirect("http://localhost:3000/auth/google/failed");
  }
};

const responseHandler = function (req, res) {
  //redirect User
  return res.redirect("/");
};

module.exports = {
  callbackHandler,
  responseHandler,
};
