const express = require("express");

const router = express.Router();

const proyectoController = require(
  "../controllers/proyectoController"
);

const {
  verifyToken,
  verifyRole,
} = require("../middleware/authMiddleware");

router.post(
  "/",
  verifyToken,
  verifyRole(["admin"]),
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
  proyectoController.actualizar
);

router.delete(
  "/:id",
  verifyToken,
  verifyRole(["admin"]),
  proyectoController.eliminar
);

module.exports = router;