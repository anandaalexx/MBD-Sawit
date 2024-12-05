const pool = require("../config/db");

const catatPenimbangan = (
  id_kendaraan,
  berat_kotor,
  berat_kendaraan,
  id_op
) => {
  return new Promise((resolve, reject) => {
    const query = "CALL CatatPenimbangan(?, ?, ?, ?)";
    pool.query(
      query,
      [id_op, id_kendaraan, berat_kotor, berat_kendaraan],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

const updatePenimbangan = (
  id,
  id_op,
  id_kendaraan,
  berat_kotor,
  berat_kendaraan
) => {
  return new Promise((resolve, reject) => {
    const query = "CALL UpdatePenimbangan(?, ?, ?, ?, ?)";
    pool.query(
      query,
      [id, id_op, id_kendaraan, berat_kotor, berat_kendaraan],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

const lihatPenimbangan = () => {
  return new Promise((resolve, reject) => {
    const query = "CALL LihatPenimbangan()";
    pool.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = { catatPenimbangan, updatePenimbangan };
