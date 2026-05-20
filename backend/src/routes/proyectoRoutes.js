const express = require("express");

const router = express.Router();

const proyectoController = require(
  "../controllers/proyectoController"
);

const {
  verifyToken,
  verifyRole,
} = require("../middleware/authMiddleware");

const {
  proyectoValidation,
} = require(
  "../validators/proyectoValidator"
);

const validateFields = require(
  "../middleware/validationMiddleware"
);

router.post(
  "/",
  verifyToken,
  verifyRole(["admin"]),
  proyectoValidation,
  validateFields,
  proyectoController.crear
);

router.get(
  "/",
  verifyToken,
  proyectoController.obtenerTodos
);

router.get(
  "/:id",
  verifyToken,
  proyectoController.obtenerPorId
);

router.put(
  "/:id",
  verifyToken,
  verifyRole(["admin"]),
  proyectoValidation,
  validateFields,
  proyectoController.actualizar
);

router.delete(
  "/:id",
  verifyToken,
  verifyRole(["admin"]),
  proyectoController.eliminar
);

module.exports = router;