const { signUp } = require("../controllers/authController");
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const router = require("express").Router();

router.post("/signUp", signUp);

router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.get("/getUserById/:id", getUserById);
router.patch("/updateUserById/:id", updateUserById);
router.delete("/deleteUserById/:id", deleteUserById);

module.exports = router;
