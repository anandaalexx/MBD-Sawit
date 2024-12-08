const express = require("express");
const router = express.Router();
const kendaraanController = require("../controllers/kendaraanController");
const { authToken } = require("../middleware/authToken");

router.post(
  "/tambah",
  authToken(["operator"]),
  kendaraanController.tambahKendaraan
);

router.put(
  "/update/:id",
  authToken(["operator"]),
  kendaraanController.updateKendaraan
);

router.delete(
  "/hapus/:id",
  authToken(["operator"]),
  kendaraanController.hapusKendaraan
);

router.get("/", authToken(), kendaraanController.lihatKendaraan);

module.exports = router;
