const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: "Token requerido",
      });
    }

    const token = authHeader.split(" ")[1];

    console.log(
  "VERIFY SECRET:",
  process.env.JWT_SECRET
);  
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      error: "Token inválido",
    });
  }
};

const verifyRole = (roles) => {
  return (req, res, next) => {

    if (!roles.includes(req.user.rol)) {
      return res.status(403).json({
        error: "Acceso denegado",
      });
    }

    next();
  };
};

module.exports = {
  verifyToken,
  verifyRole,
};