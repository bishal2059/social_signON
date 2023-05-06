const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  verified: { type: Boolean, required: true },
  picture: { type: String },
  sub: { type: String, required: true, unique: true },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};
