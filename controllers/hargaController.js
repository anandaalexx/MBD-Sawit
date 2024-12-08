const pool = require("../config/db");

const tambahHarga = (req, res) => {
  const { harga_sekarang } = req.body;
  try {
    const query = "CALL TambahHargaSawit(?)";
    pool.query(query, [harga_sekarang], (err) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ message: "Harga berhasil ditambahkan!" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHarga = (req, res) => {
  try {
    const query = "CALL LihatHarga()";
    pool.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(200).json(results);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getHargaSekarang = (req, res) => {
  try {
    const query = "CALL LihatHargaSekarang()";
    pool.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(200).json(results);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { tambahHarga, getHarga, getHargaSekarang };
