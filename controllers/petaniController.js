const pool = require("../config/db");

const tambahPetani = async (req, res) => {
  const { nama, kontak } = req.body;
  try {
    const query = "CALL TambahPetani(?, ?)";
    pool.query(query, [nama, kontak], (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Error: " + err.message });
      }
      res.status(201).json({ message: "Petani berhasil ditambahkan" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updatePetani = async (req, res) => {
  const { id } = req.params;
  const { nama, kontak } = req.body;
  try {
    const query = "CALL UpdatePetani(?, ?, ?)";
    pool.query(query, [id, nama, kontak], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ message: "Petani berhasil diupdate" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePetani = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "CALL DeletePetani(?)";
    pool.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ message: "Petani berhasil dihapus" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const lihatPetani = async (req, res) => {
  try {
    const query = "CALL LihatPetani()";
    pool.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json(results);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPetaniByID = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "CALL LihatPetanibyID(?)";
    pool.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json(results[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  tambahPetani,
  updatePetani,
  deletePetani,
  lihatPetani,
  getPetaniByID,
};
