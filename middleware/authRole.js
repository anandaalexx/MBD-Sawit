function authRole(...allowedRoles) {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Anda tidak mempunyai akses" });
    }

    next();
  };
}

module.exports = { authRole };
