const express = require("express");

const router = express.Router();

const prisma = require("../prisma");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

/* OBTENER USUARIOS */
router.get(
  "/",
  verifyToken,
  async (req, res) => {

    try {

      const usuarios =
        await prisma.usuario.findMany({
          select: {
            id_usuario: true,
            nombre: true,
            email: true,
            rol: true,
          },
        });

      res.json(usuarios);

    } catch (error) {

      res.status(500).json({
        error: error.message,
      });

    }

  }
);

module.exports = router;