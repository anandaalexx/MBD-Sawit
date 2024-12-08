const pool = require("../config/db");

const tambahKendaraan = async (req, res) => {
  const { id_petani, no_plat, tipe } = req.body;
  try {
    const query = "CALL TambahKendaraan(?, ?, ?)";
    pool.query(query, [id_petani, no_plat, tipe], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ message: "Kendaraan berhasil ditambahkan" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateKendaraan = async (req, res) => {
  const { id } = req.params;
  const { id_petani, no_plat, tipe } = req.body;
  try {
    const query = "CALL UpdateKendaraan(?, ?, ?, ?)";
    pool.query(query, [id, id_petani, no_plat, tipe], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(200).json({ message: "Kendaraan berhasil diupdate" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const hapusKendaraan = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "CALL HapusKendaraan(?)";
    pool.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(200).json({ message: "Kendaraan berhasil dihapus" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const lihatKendaraan = async (req, res) => {
  try {
    const query = "CALL LihatKendaraan()";
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

const getKendaraanByID = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "CALL CariKendaraanById(?)";
    pool.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json(results);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getKendaraanByPlat = async (req, res) => {
  const { no_plat } = req.body;
  try {
    const query = "CALL CariKendaraanByNoPlat(?)";
    pool.query(query, [no_plat], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json(results);
    });
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
