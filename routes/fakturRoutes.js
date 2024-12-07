const express = require("express");
const router = express.Router();
const {
  buatFaktur,
  updateStatusFaktur,
  getFaktur,
  getFakturByID,
  getFakturByNoFaktur,
} = require("../controllers/fakturController");
const auth = require("../middleware/authToken");

router.post("/buat", auth.authToken(["operator"]), buatFaktur);
router.patch(
  "/update-status",
  auth.authToken(["operator"]),
  updateStatusFaktur
);
router.get("/lihat", auth.authToken(), getFaktur);
router.get("/lihat/:id", auth.authToken(), getFakturByID);
router.get("/nofaktur/:no_faktur", auth.authToken(), getFakturByNoFaktur);

module.exports = router;
