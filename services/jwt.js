const jsonwebtoken = require("jsonwebtoken");

const JWT_SECRET_KEY = "redminote8prolecetdikit";

const jwt = {
  sign: (payload, options = { expiresIn: "1h" }) => {
    return jsonwebtoken.sign(payload, JWT_SECRET_KEY, options);
  },
  verify: (token) => {
    try {
      return jsonwebtoken.verify(token, JWT_SECRET_KEY);
    } catch (error) {
      console.error("JWT Verification Error:", error.message);
      return null;
    }
  },
};

module.exports = { jwt };
