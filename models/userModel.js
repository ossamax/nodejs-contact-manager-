const mongoose = require("mongoose");

const UserModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true, // Ensures email is unique
    },
    phone: {
      type: String,
      required: [true, "Please add an email"],
      unique: true, // Ensures phone is unique
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserModel);
