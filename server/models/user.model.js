const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
