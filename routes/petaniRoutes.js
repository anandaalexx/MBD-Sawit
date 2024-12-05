const express = require("express");
const router = express.Router();
const {
  tambahPetani,
  updatePetani,
  deletePetani,
  lihatPetani,
} = require("../controllers/petaniController");
const { authToken } = require("../middleware/authToken");

router.post("/tambah", tambahPetani);

router.put("/update/:id", updatePetani);

router.delete("/hapus/:id", deletePetani);

router.get("/", lihatPetani);

router.get("/:id", lihatPetani);

module.exports = router;
