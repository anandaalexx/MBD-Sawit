const express = require("express");
const router = express.Router();
const petaniController = require("../controllers/petaniController");
const { authToken } = require("../middleware/authToken");

router.post("/tambah", authToken(["operator"]), petaniController.tambahPetani);
router.patch(
  "/update/:id",
  authToken(["operator"]),
  petaniController.updatePetani
);
router.delete(
  "/hapus/:id",
  authToken(["operator"]),
  petaniController.deletePetani
);
router.get("/lihat", authToken(), petaniController.lihatPetani);
router.get("/lihat/:id", authToken(), petaniController.lihatPetani);

module.exports = router;
