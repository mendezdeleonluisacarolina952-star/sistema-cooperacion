const prisma = require("../prisma");

const crearBeneficiario = async (data) => {

  try {

    return await prisma.beneficiario.create({
      data,
    });

  } catch (error) {

    if (error.code === "P2002") {

      throw new Error(
        "El DPI ya existe"
      );

    }

    throw error;
  }
};

const obtenerBeneficiarios = async () => {
  return await prisma.beneficiario.findMany();
};

const obtenerBeneficiarioPorId = async (id) => {
  return await prisma.beneficiario.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const actualizarBeneficiario = async (id, data) => {
  return await prisma.beneficiario.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

const eliminarBeneficiario = async (id) => {
  return await prisma.beneficiario.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  crearBeneficiario,
  obtenerBeneficiarios,
  obtenerBeneficiarioPorId,
  actualizarBeneficiario,
  eliminarBeneficiario,
};