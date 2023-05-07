const path = require("path");

const httpLogin = (req, res) => {
  return res.status(200).render("login");
};

module.exports = {
  httpLogin,
};
