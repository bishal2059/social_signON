const mongoose = require("mongoose");
const { UserModel } = require("./user.mongo");

const upsertUser = async function (user) {
  try {
    const userData = await UserModel.findOneAndUpdate(user.email, user, {
      upsert: true,
      new: true,
    });
    return userData.sub;
  } catch (err) {
    console.log(err);
    throw new Error("User Upsert Failed!!");
  }
};

const getUser = async function (sub) {
  try {
    const user = await UserModel.findOne({ sub: sub }, { _id: 0, __v: 0 });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("User not Found");
  }
};

module.exports = {
  upsertUser,
  getUser,
};
