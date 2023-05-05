const axios = require("axios");
const { config } = require("../config");
const queryString = require("node:querystring");

const getGoogleToken = async function (code) {
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    redirect_uri: config.REDIRECT_URL,
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,
    grant_type: "authorization_code",
  };
  // console.log(values);
  try {
    const res = await axios.post(url, queryString.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return res.data;
  } catch (err) {
    console.log(err, "Failed to fetch Google OAuth Tokens");
    throw new Error(err.message);
  }
};

module.exports = {
  getGoogleToken,
};
