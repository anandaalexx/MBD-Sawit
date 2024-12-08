const express = require("express");
const router = express.Router();
const petaniController = require("../controllers/petaniController");
const { authToken } = require("../middleware/authToken");

router.post("/tambah", authToken(["operator"]), petaniController.tambahPetani);

router.put(
  "/update/:id",
  authToken(["operator"]),
  petaniController.updatePetani
);

router.delete(
  "/hapus/:id",
  authToken(["operator"]),
  petaniController.deletePetani
);

router.get("/", authToken(), petaniController.lihatPetani);

router.get("/:id", authToken(), petaniController.lihatPetani);

module.exports = router;
