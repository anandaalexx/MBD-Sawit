const express = require("express");
const router = express.Router();
const {
  buatFaktur,
  updateStatusFaktur,
  getFaktur,
  getFakturByID,
  getFakturByNoFaktur,
} = require("../controllers/fakturController");
const { authToken } = require("../middleware/authToken");

router.post("/buat", authToken(["operator"]), buatFaktur);
router.put("/update-status", authToken(["operator"]), updateStatusFaktur);
router.get("/lihat", authToken(), getFaktur);
router.get("/lihat/:id", authToken(), getFakturByID);
router.get("/lihat/no-faktur", authToken(), getFakturByNoFaktur);
