const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

router.get("/users", UserController.getUsers);

module.exports = router;
