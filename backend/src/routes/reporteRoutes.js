const express = require("express");

const router = express.Router();

const prisma = require("../prisma");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

router.get(
  "/",
  verifyToken,
  async (req, res) => {

    try {

      const beneficiarios =
        await prisma.beneficiario.count();

      const proyectos =
        await prisma.proyecto.count();

      const usuarios =
        await prisma.usuario.count();

      res.json({
        beneficiarios,
        proyectos,
        usuarios,
      });

    } catch (error) {

      res.status(500).json({
        error: error.message,
      });

    }

  }
);

module.exports = router;