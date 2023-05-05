const mongoose = require("mongoose");
const { UserModel } = require("./user.mongo");

const upsertUser = async function (user) {
  try {
    await UserModel.findOneAndUpdate(user.email, user, {
      upsert: true,
      new: true,
    });
  } catch (err) {
    console.log(err);
    throw new Error("User Upsert Failed!!");
  }
};

module.exports = {
  upsertUser,
};
