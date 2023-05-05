const { upsertUser } = require("../models/user.model");
const { createSession } = require("../services/cookie.session");
const { getGoogleToken } = require("../services/getGoogleToken");
const { verifyToken } = require("../services/verfiyToken");
const path = require("path");

const callbackHandler = async function (req, res) {
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
    await upsertUser({
      email: user.email,
      name: user.name,
      picture: user.picture,
      verfied: user.verfied,
    });

    //create a session
    createSession();

    //create cookies and redirect

    return res.json("User authenticated");
  } catch (error) {
    console.log(error, "Google Authorization failed");
    return res.redirect("http://localhost:3000/auth/google/failed");
  }
};

module.exports = {
  callbackHandler,
};
