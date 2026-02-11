const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
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

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "User fetched !!!",
      nbr: users.length,
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed !!!",
      error: error,
    });
  }
};
