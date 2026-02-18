const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required !!!"],
    minlength: 5,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "The email is required !!!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "This email is not valid !!!!"],
    // uppercase: true,
  },
  password: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 8,
    // validate:[validator.isStrongPassword,"sdfsgfdg"]
  },
  confirm_password: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 8,
    validate: {
      validator: function (cPass) {
        return cPass === this.password;
      },
      message: "Password and cPass does not match !!!!",
    },
  },
  role: {
    type: String,
    enum: ["admin", "user", "test"],
    default: "user",
  },
  last_pass_change_date: {
    type: Date,
    default: Date.now(),
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
