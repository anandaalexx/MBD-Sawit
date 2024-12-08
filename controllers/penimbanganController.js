const penimbanganModel = require("../models/penimbanganModel");

const catatPenimbangan = async (req, res) => {
  const { id_kendaraan, berat_kotor, berat_kendaraan } = req.body;
  const id_op = req.user.id;

  try {
    await penimbanganModel.catatPenimbangan(
      id_op,
      id_kendaraan,
      berat_kotor,
      berat_kendaraan
    );
    res.status(201).json({ message: "Penimbangan berhasil dicatat" });
  } catch (err) {
    res.status(500).json({ message: err.message, id_op });
  }
};

const updatePenimbangan = async (req, res) => {
  const { id } = req.params;
  const { id_op } = req.user.id;
  const { id_kendaraan, berat_kotor, berat_kendaraan } = req.body;
  try {
    await penimbanganModel.updatePenimbangan(
      id,
      id_op,
      id_kendaraan,
      berat_kotor,
      berat_kendaraan
    );
    res.status(200).json({ message: "Penimbangan berhasil diupdate" });
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

const lihatPenimbangan = async (req, res) => {
  try {
    const penimbangan = await penimbanganModel.lihatPenimbangan();
    res.status(200).json(penimbangan);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

const getPenimbanganByID = async (req, res) => {
  const { id } = req.params;
  try {
    const penimbangan = await penimbanganModel.getPenimbanganByID(id);
    res.status(200).json(penimbangan);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

module.exports = {
  catatPenimbangan,
  updatePenimbangan,
  lihatPenimbangan,
  getPenimbanganByID,
};
