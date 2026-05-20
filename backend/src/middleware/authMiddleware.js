const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    console.log(authHeader);

    if (!authHeader) {
      return res.status(401).json({
        error: "Token requerido",
      });
    }

    const token = authHeader.split(" ")[1];

    console.log(token);

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {

    console.log(error);

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