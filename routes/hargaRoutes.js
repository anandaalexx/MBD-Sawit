const express = require("express");
const router = express.Router();
const {
  tambahHarga,
  getHarga,
  getHargaSekarang,
} = require("../controllers/hargaController");
const auth = require("../middleware/authToken");

router.post("/tambah", auth.authToken(["manajer"]), tambahHarga);
router.get("/lihat", auth.authToken(), getHarga);
router.get("/lihat/sekarang", auth.authToken(), getHargaSekarang);

module.exports = router;
