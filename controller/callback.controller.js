const { getGoogleToken } = require("../services/getGoogleToken");

const callbackHandler = async function (req, res) {
  //get code from qs
  const code = req.query.code;
  try {
    //get id and accessToken with the code
    const res = await getGoogleToken(code);
    //get user with tokens

    //upsert the user

    //create a session

    //create access and refresh token

    //create cookies and redirect
  } catch (error) {
    console.log(error, "Google Authorization failed");
    return res.redirect("http://localhost:3000/auth/google/failed");
  }
};

module.exports = {
  callbackHandler,
};
