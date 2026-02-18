const {
  createUser,
  getUsers,
  getUserById,
} = require("../controllers/userController");
const router = require("express").Router();

router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.get("/getUserById/:id", getUserById);

module.exports = router;
