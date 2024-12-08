const fakturModel = require("../models/fakturModel");

const buatFaktur = async (req, res) => {
  const { id_penimbangan } = req.body;
  try {
    await fakturModel.buatFaktur(id_penimbangan);
    res.status(201).json({ message: "Faktur berhasil dibuat!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStatusFaktur = async (req, res) => {
  const { id, status } = req.body;
  try {
    await fakturModel.updateStatusFaktur(id, status);
    res.status(201).json({ message: "Status faktur berhasil diperbarui!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFaktur = async (req, res) => {
  try {
    const faktur = await fakturModel.getFaktur();
    res.status(200).json(faktur);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFakturByID = async (req, res) => {
  const { id } = req.params;
  try {
    const faktur = await fakturModel.getFakturByID(id);
    res.status(200).json(faktur);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFakturByNoFaktur = async (req, res) => {
  const { no_faktur } = req.body;
  try {
    const faktur = await fakturModel.getFakturByNoFaktur(no_faktur);
    res.status(200).json(faktur);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  buatFaktur,
  updateStatusFaktur,
  getFaktur,
  getFakturByID,
  getFakturByNoFaktur,
};
