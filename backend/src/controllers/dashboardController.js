const prisma = require("../prisma");

const obtenerDashboard = async (req, res) => {

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

    console.log(error);

    res.status(500).json({
      error: error.message,
    });

  }

};

module.exports = {
  obtenerDashboard,
};