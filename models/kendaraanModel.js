const pool = require("../config/db");

const tambahKendaraan = (id_petani, no_plat, tipe) => {
  return new Promise((resolve, reject) => {
    const query = "CALL TambahKendaraan(?, ?, ?)";
    pool.query(query, [id_petani, no_plat, tipe], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const updateKendaraan = (id, id_petani, no_plat, tipe) => {
  return new Promise((resolve, reject) => {
    const query = "CALL UpdateKendaraan(?, ?, ?, ?)";
    pool.query(query, [id, id_petani, no_plat, tipe], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const hapusKendaraan = (id) => {
  return new Promise((resolve, reject) => {
    const query = "CALL HapusKendaraan(?)";
    pool.query(query, [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const lihatKendaraan = () => {
  return new Promise((resolve, reject) => {
    const query = "CALL LihatKendaraan()";
    pool.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = {
  tambahKendaraan,
  updateKendaraan,
  hapusKendaraan,
  lihatKendaraan,
};
