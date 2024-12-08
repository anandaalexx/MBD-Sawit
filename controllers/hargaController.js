const hargaModel = require("../models/hargaModel");

const tambahHarga = async (req, res) => {
  const { harga_sekarang } = req.body;
  try {
    await hargaModel.tambahHarga(harga_sekarang);
    res.status(201).json({ message: "Harga berhasil ditambahkan!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHarga = async (req, res) => {
  try {
    const harga = await hargaModel.getHarga();
    res.status(200).json(harga);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHargaSekarang = async (req, res) => {
  try {
    const harga = await hargaModel.getHargaSekarang();
    res.status(200).json(harga);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { tambahHarga, getHarga, getHargaSekarang };
