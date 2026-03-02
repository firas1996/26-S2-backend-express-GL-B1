const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id, email, role) => {
  return jwt.sign(
    { id, email, role, test: "Hello !" },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    },
  );
};

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

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        message: "Email and pass are required !!!!",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        message: "Email or pass are incorrect !!!",
      });
    }
    if (!(await user.checkPassword(password, user.password))) {
      res.status(404).json({
        message: "Email or pass are incorrect !!!",
      });
    }
    const token = createToken(user._id, user.email, user.role);
    res.status(200).json({
      message: "Logged In !!!",
      token,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed !!!",
      error: error,
    });
  }
};
