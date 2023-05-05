const express = require("express");
const cookieSession = require("cookie-session");
const app = require("../app");
const createSession = function () {
  app.use(
    cookieSession({
      name: "session",
      keys: [process.env.key1, process.env.key2],
      maxAge: 60 * 60 * 1000,
    })
  );
};

module.exports = {
  createSession,
};
