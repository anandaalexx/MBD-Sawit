const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test connection with query
pool.query("SELECT 1", (err, results) => {
  if (err) {
    console.error("Tidak dapat terhubung ke database:", err);
  } else {
    console.log("Database Terhubung: Test query berhasil");
  }
});

module.exports = pool;
