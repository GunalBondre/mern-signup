const mongoose = require("mongoose");
mongoose.set("debug", true);

const userSchema = mongoose.Schema(
  {
    username: { type: String },
    optionValue: { type: String },

    password: { type: String },

    email: {
      type: String,
    },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
