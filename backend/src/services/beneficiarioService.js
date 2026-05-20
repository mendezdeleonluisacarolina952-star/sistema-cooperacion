const prisma = require("../prisma");

const crearBeneficiario = async (data) => {
  return await prisma.beneficiario.create({
    data,
  });
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