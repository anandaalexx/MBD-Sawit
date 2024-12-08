const pool = require("../config/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = (req, res) => {
  const { username, nama, password, role } = req.body;
  try {
    const query = "CALL RegisterUser(?, ?, ?, ?)";
    pool.query(query, [username, nama, password, role], (err, results) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.status(201).json({ message: "User berhasil didaftarkan" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = (req, res) => {
  const { username, password } = req.body;
  try {
    const query = "CALL LoginUser(?, ?)";
    pool.query(query, [username, password], (err, result) => {
      if (err) return res.status(500).json({ message: err.message });

      const user = result[0][0];
      const token = jwt.sign(
        { id: user.id, role: user.roles },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000 * 3,
        sameSite: "Strict",
      });

      res.status(200).json({ message: "Berhasil Login!" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUsers = (req, res) => {
  const { id, username, nama } = req.body;
  try {
    const query = "CALL UpdateUsers(?, ?, ?)";
    pool.query(query, [id, username, nama], (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(201).json({ message: "User berhasil diupdate" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  try {
    const query = "CALL DeleteUsers(?)";
    pool.query(query, [id], (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(200).json({ message: "User berhasil dihapus" });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsers = (req, res) => {
  try {
    const query = "CALL LihatUsers()";
    pool.query(query, (err, results) => {
      if (err)
        return res.status(500).json({ message: "Error: " + err.message });
      res.status(200).json(results[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsersByID = (req, res) => {
  const { id } = req.params;
  try {
    const query = "CALL CariUsersByID(?)";
    pool.query(query, [id], (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(200).json(results[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsersByUsername = (req, res) => {
  const { username } = req.body;
  try {
    const query = "CALL CariUsersByUsername(?)";
    pool.query(query, [username], (err, results) => {
      if (err) return res.status(500).json({ message: err.message });
      res.status(200).json(results[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Berhasil Logout!" });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  updateUsers,
  deleteUser,
  getUsers,
  getUsersByID,
  getUsersByUsername,
};
