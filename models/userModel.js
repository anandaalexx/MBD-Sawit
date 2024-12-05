const pool = require("../config/db");

const registerUser = (username, nama, password, role) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = "CALL RegisterUser(?, ?, ?, ?)";
      pool.query(query, [username, nama, password, role], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    } catch (err) {
      reject(err);
    }
  });
};

const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    const query = "CALL LoginUser(?, ?)";
    pool.query(query, [username, password], (err, result) => {
      if (err) return reject(err);
      resolve(result[0][0]);
    });
  });
};

const getUsers = () => {
  return new Promise((resolve, reject) => {
    const query = "CALL LihatUsers()";
    pool.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
};
