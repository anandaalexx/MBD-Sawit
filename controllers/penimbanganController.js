const pool = require("../config/db");

const catatPenimbangan = (req, res) => {
  const { id_kendaraan, berat_kotor, berat_kendaraan } = req.body;
  const id_op = req.user.id;

  try {
    const query = "CALL CatatPenimbangan(?, ?, ?, ?)";
    pool.query(
      query,
      [id_op, id_kendaraan, berat_kotor, berat_kendaraan],
      (err) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        res.status(201).json({ message: "Penimbangan berhasil dicatat" });
      }
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updatePenimbangan = (req, res) => {
  const { id } = req.params;
  const id_op = req.user.id;
  const { id_kendaraan, berat_kotor, berat_kendaraan } = req.body;
  try {
    const query = "CALL UpdatePenimbangan(?, ?, ?, ?, ?)";
    pool.query(
      query,
      [id, id_op, id_kendaraan, berat_kotor, berat_kendaraan],
      (err) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        res
          .status(200)
          .json({ message: "Catatan penimbangan berhasil diupdate" });
      }
    );
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

const lihatPenimbangan = (req, res) => {
  try {
    const query = "CALL LihatPenimbangan()";
    pool.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json(results);
    });
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

const getPenimbanganByID = (req, res) => {
  const { id } = req.params;
  try {
    const query = "CALL LihatPenimbanganByID()";
    pool.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json(results);
    });
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
  }
};

const getLaporan = (req, res) => {
  const { start_date, end_date } = req.body;
  try {
    const query = "CALL GetLaporanRingkasanPenimbangan(?, ?)";
    pool.query(query, [start_date, end_date], (err, results) => {
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
  catatPenimbangan,
  updatePenimbangan,
  lihatPenimbangan,
  getPenimbanganByID,
  getLaporan,
};
