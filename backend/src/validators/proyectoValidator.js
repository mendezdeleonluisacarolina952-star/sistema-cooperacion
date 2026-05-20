const { body } = require("express-validator");

const proyectoValidation = [

  body("nombre")
    .notEmpty()
    .withMessage(
      "El nombre del proyecto es obligatorio"
    ),

  body("descripcion")
    .notEmpty()
    .withMessage(
      "La descripción es obligatoria"
    ),

  body("fechaInicio")
    .isISO8601()
    .withMessage(
      "Fecha de inicio inválida"
    ),

  body("fechaFin")
    .isISO8601()
    .withMessage(
      "Fecha de fin inválida"
    ),

  body("estado")
    .isIn([
      "Activo",
      "Finalizado",
      "Pendiente",
    ])
    .withMessage(
      "Estado inválido"
    ),

];

module.exports = {
  proyectoValidation,
};