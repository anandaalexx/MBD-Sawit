const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  const { username, nama, password, role } = req.body;
  try {
    await userModel.registerUser(username, nama, password, role);
    res.status(201).json({ message: "User berhasil didaftarkan" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.loginUser(username, password);

    const token = jwt.sign(
      { id: user.id, role: user.roles },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "Strict",
    });

    res.status(200).json({ message: "Berhasil Login!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUsers = async (req, res) => {
  const { id, username, nama } = req.body;
  try {
    const user = await userModel.updateUser(id, username, nama);
    res.status(201).json({ message: "User berhasil diupdate" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const hapusOperator = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.deleteUser(id);
    res.status(200).json({ message: "User berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error: " + err.message });
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
  getUsers,
};
