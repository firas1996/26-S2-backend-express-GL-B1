const { signUp, signIn } = require("../controllers/authController");
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const { protectorMW, checkRoleMW } = require("../middlewares/authGuardMW");
const router = require("express").Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

router
  .route("/users")
  .post(createUser)
  .get(protectorMW, checkRoleMW("admin"), getUsers);
router
  .route("/users/:id")
  .get(checkRoleMW("admin", "user"), getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = router;
