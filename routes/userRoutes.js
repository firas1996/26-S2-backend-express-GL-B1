const { createUser, getUsers } = require("../controllers/userController");
const router = require("express").Router();

router.post("/createUser", createUser);
router.get("/getUsers", getUsers);

module.exports = router;
