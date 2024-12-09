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

router.get("/lihat", authToken(), kendaraanController.lihatKendaraan);

router.get("/lihat/:id", authToken(), kendaraanController.getKendaraanByID);

router.get(
  "/lihat/noplat",
  authToken(),
  kendaraanController.getKendaraanByPlat
);

module.exports = router;
