const path = require("path");

const authFailed = function (req, res) {
  return res
    .status(404)
    .sendFile(path.join(__dirname, "..", "views", "markup", "noauth.html"));
};

module.exports = {
  authFailed,
};
