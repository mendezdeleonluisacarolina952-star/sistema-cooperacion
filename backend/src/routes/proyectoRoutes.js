const express = require("express");

const router = express.Router();

const proyectoController = require(
  "../controllers/proyectoController"
);

router.post(
  "/",
  proyectoController.crear
);

router.get(
  "/",
  proyectoController.obtenerTodos
);

router.get(
  "/:id",
  proyectoController.obtenerPorId
);

router.put(
  "/:id",
  proyectoController.actualizar
);

router.delete(
  "/:id",
  proyectoController.eliminar
);

module.exports = router;