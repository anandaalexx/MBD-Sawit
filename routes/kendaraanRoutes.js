const express = require("express");
const router = express.Router();
const kendaraanController = require("../controllers/kendaraanController");

router.post("/tambah", kendaraanController.tambahKendaraan);

router.put("/update/:id", kendaraanController.updateKendaraan);

router.delete("/hapus/:id", kendaraanController.hapusKendaraan);

router.get("/", kendaraanController.lihatKendaraan);

module.exports = router;
