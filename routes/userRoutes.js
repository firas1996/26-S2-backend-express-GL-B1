const { createUser } = require("../controllers/userController");
const router = require("express").Router();

router.post("/createUser", createUser);

module.exports = router;
