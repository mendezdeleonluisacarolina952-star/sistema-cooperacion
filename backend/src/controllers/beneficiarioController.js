const prisma = require("../prisma");

/* CREAR */
const crear = async (req, res) => {
  try {
    const beneficiario = await prisma.beneficiario.create({
      data: req.body,
    });

    res.status(201).json(beneficiario);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

/* OBTENER TODOS */
const obtenerTodos = async (req, res) => {
  try {
    const beneficiarios =
      await prisma.beneficiario.findMany();

    res.json(beneficiarios);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

/* OBTENER POR ID */
const obtenerPorId = async (req, res) => {
  try {
    const beneficiario =
      await prisma.beneficiario.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });

    res.json(beneficiario);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

/* ACTUALIZAR */
const actualizar = async (req, res) => {
  try {
    const beneficiario =
      await prisma.beneficiario.update({
        where: {
          id: Number(req.params.id),
        },
        data: req.body,
      });

    res.json(beneficiario);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

/* ELIMINAR */
const eliminar = async (req, res) => {
  try {
    await prisma.beneficiario.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Beneficiario eliminado",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  crear,
  obtenerTodos,
  obtenerPorId,
  actualizar,
  eliminar,
};