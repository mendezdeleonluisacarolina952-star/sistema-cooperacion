const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);

    res.status(201).json({
      message: "Usuario registrado correctamente",
      user,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await authService.loginUser(
      email,
      password
    );

    res.status(200).json(result);

  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};

const profile = async (req, res) => {
  res.status(200).json({
    message: "Ruta protegida",
    user: req.user,
  });
};

module.exports = {
  register,
  login,
  profile,
};