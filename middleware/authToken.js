const jwt = require("jsonwebtoken");
require("dotenv").config();

const authToken = (allowedRoles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Akses ditolak" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token tidak valid" });
      }

      if (allowedRoles.length && !allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: "Anda tidak memiliki akses" });
      }

      req.user = user;
      next();
    });
  };
};

module.exports = { authToken };
