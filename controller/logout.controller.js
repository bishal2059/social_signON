const httpLogout = function (req, res) {
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  return res.status(200).redirect("/");
};

module.exports = {
  httpLogout,
};
