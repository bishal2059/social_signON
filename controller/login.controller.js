const path = require("path");

const httpLogin = (req, res) => {
  return res
    .status(200)
    .sendFile(path.join(__dirname, "..", "views", "markup", "login.html"));
};

module.exports = {
  httpLogin,
};
