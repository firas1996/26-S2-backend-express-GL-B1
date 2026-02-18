const User = require("../models/userModel");

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create({
      ...req.body,
      role: req.body.role === "admin" ? "user" : req.body.role,
    });
    res.status(201).json({
      message: "User created !!!",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed !!!",
      error: error,
    });
  }
};
