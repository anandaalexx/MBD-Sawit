const kendaraanModel = require("../models/kendaraanModel");

const tambahKendaraan = async (req, res) => {
  const { id_petani, no_plat, tipe } = req.body;
  try {
    await kendaraanModel.tambahKendaraan(id_petani, no_plat, tipe);
    res.status(201).json({ message: "Kendaraan berhasil ditambahkan" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateKendaraan = async (req, res) => {
  const { id } = req.params;
  const { id_petani, no_plat, tipe } = req.body;
  try {
    await kendaraanModel.updateKendaraan(id, id_petani, no_plat, tipe);
    res.status(200).json({ message: "Kendaraan berhasil diupdate" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const hapusKendaraan = async (req, res) => {
  const { id } = req.params;
  try {
    await kendaraanModel.hapusKendaraan(id);
    res.status(200).json({ message: "Kendaraan berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const lihatKendaraan = async (req, res) => {
  try {
    const kendaraan = await kendaraanModel.lihatKendaraan();
    res.status(200).json(kendaraan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getKendaraanByID = async (req, res) => {
  const { id } = req.params;
  try {
    const kendaraan = await kendaraanModel.getKendaraanByID(id);
    res.status(200).json(kendaraan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getKendaraanByPlat = async (req, res) => {
  const { no_plat } = req.body;
  try {
    const kendaraan = await kendaraanModel.getKendaraanNoPlat(no_plat);
    res.status(200).json(kendaraan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  tambahKendaraan,
  updateKendaraan,
  hapusKendaraan,
  lihatKendaraan,
  getKendaraanByID,
  getKendaraanByPlat,
};
