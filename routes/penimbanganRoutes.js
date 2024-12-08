const express = require("express");
const router = express.Router();
const authToken = require("../middleware/authToken");
const penimbanganController = require("../controllers/penimbanganController");
const auth = require("../middleware/authToken");

router.post(
  "/catat",
  auth.authToken(["operator"]),
  penimbanganController.catatPenimbangan
);

router.put(
  "/update",
  auth.authToken(["operator"]),
  penimbanganController.updatePenimbangan
);

router.get("/", auth.authToken(), penimbanganController.lihatPenimbangan);

module.exports = router;
