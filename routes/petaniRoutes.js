const express = require("express");
const router = express.Router();
const petaniController = require("../controllers/petaniController");
const { authToken } = require("../middleware/authToken");

router.post("/tambah", authToken(["manajer"]), petaniController.tambahPetani);

router.put("/update/:id", petaniController.updatePetani);

router.delete("/hapus/:id", petaniController.deletePetani);

router.get("/", petaniController.lihatPetani);

router.get("/:id", petaniController.lihatPetani);

module.exports = router;
