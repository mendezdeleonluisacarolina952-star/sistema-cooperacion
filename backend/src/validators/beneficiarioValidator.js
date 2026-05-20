const { body } = require("express-validator");

const beneficiarioValidation = [

  body("nombre")
    .notEmpty()
    .withMessage(
      "El nombre es obligatorio"
    ),

  body("dpi")
    .isLength({ min: 13, max: 13 })
    .withMessage(
      "El DPI debe tener 13 dígitos"
    )
    .isNumeric()
    .withMessage(
      "El DPI solo debe contener números"
    ),

  body("edad")
    .isInt({ min: 1 })
    .withMessage(
      "La edad debe ser mayor a 0"
    ),

  body("ubicacion")
    .notEmpty()
    .withMessage(
      "La ubicación es obligatoria"
    ),

  body("proyectoId")
    .isInt()
    .withMessage(
      "El proyectoId debe ser numérico"
    ),

];

module.exports = {
  beneficiarioValidation,
};