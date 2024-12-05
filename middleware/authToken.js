const jwt = require("jsonwebtoken");
require("dotenv").config();

const authToken = (roles = []) => {
  return (req, res, next) => {
    const token = req.cookies.token || req.headers["authorization"];
    if (!token) {
      return res.status(403).json({ message: "Token tidak ditemukan!" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token tidak valid!" });
      }

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Anda tidak memiliki akses" });
      }

      req.user = decoded;
      next();
    });
  };
};

module.exports = { authToken };
