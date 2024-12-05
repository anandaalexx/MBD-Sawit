const express = require("express");
const router = express.Router();
const authToken = require("../middleware/authToken");
const penimbanganController = require("../controllers/penimbanganController");

router.post("/catat", penimbanganController.catatPenimbangan);

router.put("/update", penimbanganController.updatePenimbangan);

router.get("/lihat", penimbanganController.lihatPenimbangan);

module.exports = router;
