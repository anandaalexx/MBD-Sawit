const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authToken } = require("../middleware/authToken");

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.post("/logout", userController.logoutUser);

router.get("/", authToken(), userController.getUsers);

module.exports = router;
