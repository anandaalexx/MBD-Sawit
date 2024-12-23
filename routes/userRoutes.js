const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authToken } = require("../middleware/authToken");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.put("/update", authToken(["manajer"]), userController.updateUsers);
router.delete("/hapus/:id", authToken(["manajer"]), userController.deleteUser);
router.get("/lihat", authToken(["manajer"]), userController.getUsers);
router.get("/lihat/:id", authToken(["manajer"]), userController.getUsersByID);
router.get(
  "/lihat/username",
  authToken(["manajer"]),
  userController.getUsersByUsername
);

module.exports = router;
