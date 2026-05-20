const prisma = require("../prisma");

const obtenerDashboard = async () => {

  const totalProyectos =
    await prisma.proyecto.count();

  const totalBeneficiarios =
    await prisma.beneficiario.count();

  const proyectosActivos =
    await prisma.proyecto.count({
      where: {
        estado: "Activo",
      },
    });

  const proyectosFinalizados =
    await prisma.proyecto.count({
      where: {
        estado: "Finalizado",
      },
    });

  return {
    totalProyectos,
    totalBeneficiarios,
    proyectosActivos,
    proyectosFinalizados,
  };
};

module.exports = {
  obtenerDashboard,
};