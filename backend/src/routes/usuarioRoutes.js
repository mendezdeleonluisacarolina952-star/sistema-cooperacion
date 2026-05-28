const express = require("express");

const router = express.Router();

const prisma = require("../prisma");

const bcrypt = require("bcryptjs");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

// =========================
// OBTENER USUARIOS
// =========================
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

// =========================
// CREAR USUARIO
// =========================
router.post(
  "/",
  verifyToken,
  async (req, res) => {

    try {

      const {
        nombre,
        email,
        password,
        rol,
      } = req.body;

      const hashedPassword =
        await bcrypt.hash(password, 10);

      const usuario =
        await prisma.usuario.create({

          data: {

            nombre,

            email,

            password: hashedPassword,

            rol,

          },

        });

      res.status(201).json(usuario);

    } catch (error) {

      res.status(500).json({

        error: error.message,

      });

    }

  }
);

// =========================
// ACTUALIZAR USUARIO
// =========================
router.put(
  "/:id",
  verifyToken,
  async (req, res) => {

    try {

      const id =
        Number(req.params.id);

      const {
        nombre,
        email,
        password,
        rol,
      } = req.body;

      const dataActualizar = {

        nombre,

        email,

        rol,

      };

      // SOLO ACTUALIZA PASSWORD
      // SI VIENE LLENA
      if (
        password &&
        password.trim() !== ""
      ) {

        dataActualizar.password =
          await bcrypt.hash(
            password,
            10
          );

      }

      const usuario =
        await prisma.usuario.update({

          where: {

            id_usuario: id,

          },

          data: dataActualizar,

        });

      res.json(usuario);

    } catch (error) {

      res.status(500).json({

        error: error.message,

      });

    }

  }
);

// =========================
// ELIMINAR USUARIO
// =========================
router.delete(
  "/:id",
  verifyToken,
  async (req, res) => {

    try {

      const id =
        Number(req.params.id);

      await prisma.usuario.delete({

        where: {

          id_usuario: id,

        },

      });

      res.json({

        message:
          "Usuario eliminado",

      });

    } catch (error) {

      res.status(500).json({

        error: error.message,

      });

    }

  }
);

module.exports = router;