const pool = require("../config/db");

const buatFaktur = (id_penimbangan) => {
  return new Promise((resolve, reject) => {
    const query = "CALL BuatFaktur(?)";
    pool.query(query, [id_penimbangan], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const updateStatusFaktur = (id, status) => {
  return new Promise((resolve, reject) => {
    const query = "CALL UpdateStatusFaktur(?, ?)";
    pool.query(query, [id, status], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getFaktur = () => {
  return new Promise((resolve, reject) => {
    const query = "CALL LihatFaktur()";
    pool.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

const getFakturByID = (id) => {
  return new Promise((resolve, reject) => {
    const query = "CALL CariFakturById(?)";
    pool.query(query, [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getFakturByNoFaktur = (no_faktur) => {
  return new Promise((resolve, reject) => {
    const query = "CALL CariFakturByNomorFaktur(?)";
    pool.query(query, [no_faktur], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const getLaporan = (start_date, end_date) => {
  return new Promise((resolve, reject) => {
    const query = "CALL GetLaporanRingkasanPenimbangan(?, ?)";
    pool.query(query, [start_date, end_date], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = {
  buatFaktur,
  updateStatusFaktur,
  getFaktur,
  getFakturByID,
  getFakturByNoFaktur,
  getLaporan,
};
