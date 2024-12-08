const jwt = require("jsonwebtoken");

const authToken = (roles = []) => {
  return (req, res, next) => {
    const token =
      req.cookies.token || req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res
        .status(403)
        .json({ message: "Token tidak ditemukan. Harap Login!" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token tidak valid!" });
      }

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Anda tidak memiliki akses" });
      }

      req.user = { id: decoded.id, role: decoded.role };
      next();
    });
  };
};

module.exports = { authToken };
