const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    firstName: String,
    lastName: String
  },
  {
    strictQuery: true,
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("User", User);
