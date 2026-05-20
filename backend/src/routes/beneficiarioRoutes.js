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
} = require(
  "../validators/beneficiarioValidator"
);

const validateFields = require(
  "../middleware/validationMiddleware"
);

router.post(
  "/",
  verifyToken,
  beneficiarioValidation,
  validateFields,
  beneficiarioController.crear
);

router.get(
  "/",
  verifyToken,
  beneficiarioController.obtenerTodos
);

router.get(
  "/:id",
  verifyToken,
  beneficiarioController.obtenerPorId
);

router.put(
  "/:id",
  verifyToken,
  beneficiarioValidation,
  validateFields,
  beneficiarioController.actualizar
);

router.delete(
  "/:id",
  verifyToken,
  verifyRole(["admin"]),
  beneficiarioController.eliminar
);

module.exports = router;
