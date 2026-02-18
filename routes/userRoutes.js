const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
} = require("../controllers/userController");
const router = require("express").Router();

router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.get("/getUserById/:id", getUserById);
router.patch("/updateUserById/:id", updateUserById);

module.exports = router;
