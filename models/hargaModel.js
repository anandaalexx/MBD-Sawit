const pool = require("../config/db");

const tambahHarga = (harga_sekarang) => {
  return new Promise((resolve, reject) => {
    const query = "CALL TambahHargaSawit(?)";
    pool.query(query, [harga_sekarang], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getHarga = () => {
  return new Promise((resolve, reject) => {
    const query = "CALL LihatHarga()";
    pool.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

const getHargaSekarang = () => {
  return new Promise((resolve, reject) => {
    const query = "CALL LihatHargaSekarang()";
    pool.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

module.exports = { tambahHarga, getHarga, getHargaSekarang };
