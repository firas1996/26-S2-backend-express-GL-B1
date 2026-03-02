const { verify } = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/userModel");

exports.protectorMW = async (req, res, next) => {
  try {
    let token;
    // 1) bech t'thabat si el user 3andou token or not !
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res.status(401).json({
        message: "You are not logged in !!!",
      });
    }
    // 2) nech nthabat ken el token valid or not !
    const ourToken = await promisify(verify)(token, process.env.JWT_SECRET);
    console.log(ourToken);
    // 3) bech nthabat si el user still exists !
    const user = await User.findById(ourToken.id);
    if (!user) {
      res.status(404).json({
        message: "User no longer exists !!!",
      });
    }
    // 4) bech nthabat ken el token tsan3et 9bal e5er pass update !
    console.log(parseInt(user.last_pass_change_date.getTime() / 1000));
    console.log(ourToken.iat);
    if (parseInt(user.last_pass_change_date.getTime() / 1000) > ourToken.iat) {
      res.status(401).json({
        message: "Token expired !!!",
      });
    }
    next();
  } catch (error) {
    res.status(400).json({
      message: "Failed !!!",
      error: error,
    });
  }
};

exports.checkRoleMW = async (params) => {};
