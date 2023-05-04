const authFailed = function (req, res) {
  return res.send("404 | Google Authorization Failed.");
};

module.exports = {
  authFailed,
};
