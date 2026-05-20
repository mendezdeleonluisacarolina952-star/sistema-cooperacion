const prisma = require("../prisma");

const crearProyecto = async (data) => {
  return await prisma.proyecto.create({
    data,
  });
};

const obtenerProyectos = async () => {
  return await prisma.proyecto.findMany();
};

const obtenerProyectoPorId = async (id) => {
  return await prisma.proyecto.findUnique({
    where: {
      id: Number(id),
    },
  });
};

const actualizarProyecto = async (id, data) => {
  return await prisma.proyecto.update({
    where: {
      id: Number(id),
    },
    data,
  });
};

const eliminarProyecto = async (id) => {
  return await prisma.proyecto.delete({
    where: {
      id: Number(id),
    },
  });
};

module.exports = {
  crearProyecto,
  obtenerProyectos,
  obtenerProyectoPorId,
  actualizarProyecto,
  eliminarProyecto,
};