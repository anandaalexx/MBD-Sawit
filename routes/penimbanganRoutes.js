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

router.get("/lihat", auth.authToken(), penimbanganController.lihatPenimbangan);

router.get(
  "/lihat/:id",
  auth.authToken(),
  penimbanganController.getPenimbanganByID
);

module.exports = router;
