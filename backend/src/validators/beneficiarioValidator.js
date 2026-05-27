const { body } = require("express-validator");

const beneficiarioValidation = [
  body("nombre")
    .notEmpty()
    .withMessage("Nombre obligatorio"),

  body("dpi")
    .notEmpty()
    .withMessage("DPI obligatorio"),

  body("edad")
    .isInt()
    .withMessage("Edad inválida"),

  body("ubicacion")
    .notEmpty()
    .withMessage("Ubicación obligatoria"),
];

module.exports = {
  beneficiarioValidation,
};