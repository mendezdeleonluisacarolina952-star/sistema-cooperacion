const prisma = require("../prisma");


const crearProyecto = async (data) => {
  return await prisma.proyecto.create({
    data,
  });
};

const obtenerProyectos = async (filtros) => {

  const where = {};

  // FILTRO POR ESTADO
  if (filtros.estado) {

    where.estado = filtros.estado;

  }

  // BÚSQUEDA POR NOMBRE
  if (filtros.nombre) {

    where.nombre = {
      contains: filtros.nombre,
      mode: "insensitive",
    };

  }

  return await prisma.proyecto.findMany({

    where,

    include: {
      beneficiarios: true,
    },

  });
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