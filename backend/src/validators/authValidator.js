const { body } = require("express-validator");

const registerValidation = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),

  body("email")
    .isEmail()
    .withMessage("Email inválido"),

  body("password")
    .isLength({ min: 6 })
    .withMessage(
      "La contraseña debe tener mínimo 6 caracteres"
    ),

  body("rol")
    .isIn(["admin", "usuario"])
    .withMessage("Rol inválido"),
];

module.exports = {
  registerValidation,
};