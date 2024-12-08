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

const updateUser = (id, username, nama) => {
  return new Promise((resolve, reject) => {
    const query = "CALL UpdateUsers(?, ?, ?)";
    pool.query(query, [id, username, nama], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const query = "CALL DeleteUsers(?)";
    pool.query(query, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results);
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

const getUsersByID = (id) => {
  return new Promise((resolve, reject) => {
    const query = "CALL CariUsersByID(?)";
    pool.query(query, [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

const getUsersByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const query = "CALL CariUsersByUsername(?)";
    pool.query(query, [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUsers,
  getUsersByID,
  getUsersByUsername,
};
