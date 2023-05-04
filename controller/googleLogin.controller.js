const consentURL = function () {
  const rootURL = process.env.ROOT_URL;
  const options = {
    client_id: process.env.CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URL,
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
    access_type: "offline",
    response_type: "code",
  };
  const qs = new URLSearchParams(options);
  return `${rootURL}?${qs.toString()}`;
};

const authGoogle = function (req, res) {
  return res.redirect(consentURL());
};

module.exports = {
  authGoogle,
};
