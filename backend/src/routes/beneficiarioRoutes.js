const express = require("express");

const router = express.Router();

const beneficiarioController = require(
  "../controllers/beneficiarioController"
);

router.post(
  "/",
  beneficiarioController.crear
);

router.get(
  "/",
  beneficiarioController.obtenerTodos
);

router.get(
  "/:id",
  beneficiarioController.obtenerPorId
);

router.put(
  "/:id",
  beneficiarioController.actualizar
);

router.delete(
  "/:id",
  beneficiarioController.eliminar
);

module.exports = router;
