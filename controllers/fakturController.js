const pool = require("../config/db");

const buatFaktur = async (req, res) => {
  const { id_penimbangan } = req.body;
  try {
    const query = "CALL BuatFaktur(?)";
    pool.query(query, [id_penimbangan], (err) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ message: "Faktur berhasil dibuat" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStatusFaktur = async (req, res) => {
  const { id, status } = req.body;
  try {
    const query = "CALL UpdateStatusFaktur(?, ?)";
    pool.query(query, [id, status], (err) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ message: "Status faktur berhasil diupdate" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getFaktur = async (req, res) => {
  try {
    const query = "CALL LihatFaktur()";
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

const getFakturByID = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "CALL CariFakturById(?)";
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

const getFakturByNoFaktur = async (req, res) => {
  const { no_faktur } = req.body;
  try {
    const query = "CALL CariFakturByNomorFaktur(?)";
    pool.query(query, [no_faktur], (err, results) => {
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
  buatFaktur,
  updateStatusFaktur,
  getFaktur,
  getFakturByID,
  getFakturByNoFaktur,
};
