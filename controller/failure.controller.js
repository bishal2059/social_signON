const path = require("path");

const authFailed = function (req, res) {
  return res
    .status(401)
    .render("noauth", { message: "User Verfifcation Failed", code: "404" });
};

module.exports = {
  authFailed,
};
