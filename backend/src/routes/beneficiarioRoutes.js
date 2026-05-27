const express = require("express");

const router = express.Router();

const beneficiarioController = require(
  "../controllers/beneficiarioController"
);

const {
  verifyToken,
  verifyRole,
} = require("../middleware/authMiddleware");

const {
  beneficiarioValidation,
} = require("../validators/beneficiarioValidator");

const validateFields = require(
  "../middleware/validationMiddleware"
);

/* CREAR */
router.post(
  "/",
  verifyToken,
  beneficiarioValidation,
  validateFields,
  beneficiarioController.crear
);

/* OBTENER TODOS */
router.get(
  "/",
  verifyToken,
  beneficiarioController.obtenerTodos
);

/* OBTENER POR ID */
router.get(
  "/:id",
  verifyToken,
  beneficiarioController.obtenerPorId
);

/* ACTUALIZAR */
router.put(
  "/:id",
  verifyToken,
  beneficiarioValidation,
  validateFields,
  beneficiarioController.actualizar
);

/* ELIMINAR */
router.delete(
  "/:id",
  verifyToken,
  verifyRole(["admin"]),
  beneficiarioController.eliminar
);

module.exports = router;