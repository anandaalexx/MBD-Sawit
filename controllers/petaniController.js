const petaniModel = require("../models/petaniModel");

const tambahPetani = async (req, res) => {
  const { nama, kontak } = req.body;
  try {
    await petaniModel.tambahPetani(nama, kontak);
    res.status(201).json({ message: "Petani berhasil ditambahkan" });
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

const updatePetani = async (req, res) => {
  const { id } = req.params;
  const { nama, kontak } = req.body;
  try {
    await petaniModel.updatePetani(id, nama, kontak);
    res.status(201).json({ message: "Petani berhasil diupdate" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePetani = async (req, res) => {
  const { id } = req.params;
  try {
    await petaniModel.deletePetani(id);
    res.status(201).json({ message: "Petani berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const lihatPetani = async (req, res) => {
  try {
    const petani = await petaniModel.lihatPetani();
    res.status(201).json(petani);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getpetanibyid = async (req, res) => {
  try {
    const petani = await petaniModel.lihatPetaniByID();
    res.status(201).json(petani);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  tambahPetani,
  updatePetani,
  deletePetani,
  lihatPetani,
  getpetanibyid,
};
