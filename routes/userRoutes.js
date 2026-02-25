const { signUp, signIn } = require("../controllers/authController");
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const router = require("express").Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

router.route("/users").post(createUser).get(getUsers);
router
  .route("/users/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
