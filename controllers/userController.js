const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
require("dotenv").config();

const registerUser = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    await userModel.registerUser(username, password, role);
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
      { id: user.id, username: user.username, role: user.roles },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Berhasil Login!", token });
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

module.exports = {
  registerUser,
  loginUser,
  getUsers,
};
