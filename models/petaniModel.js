const pool = require("../config/db");

const tambahPetani = (nama, kontak) => {
  return new Promise((resolve, reject) => {
    const query = "CALL TambahPetani(?, ?)";
    pool.query(query, [nama, kontak], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const updatePetani = (id, nama, kontak) => {
  return new Promise((resolve, reject) => {
    const query = "CALL UpdatePetani(?, ?, ?)";
    pool.query(query, [id, nama, kontak], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const deletePetani = (id) => {
  return new Promise((resolve, reject) => {
    const query = "CALL DeletePetani(?)";
    pool.query(query, [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const lihatPetani = () => {
  return new Promise((resolve, reject) => {
    const query = "CALL LihatPetani()";
    pool.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

const lihatPetaniByID = (id) => {
  return new Promise((resolve, reject) => {
    const query = "CALL LihatPetanibyID(?)";
    pool.query(query, [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = {
  tambahPetani,
  updatePetani,
  deletePetani,
  lihatPetani,
  lihatPetaniByID,
};
