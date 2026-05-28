const prisma = require("../prisma");

// =========================
// CREAR
// =========================
const crearProyecto = async (data) => {

  return await prisma.proyecto.create({

    data: {

      nombre: data.nombre,

      descripcion: data.descripcion,

      fechaInicio: new Date(data.fechaInicio),

      fechaFin: new Date(data.fechaFin),

      estado: data.estado,

    },

  });

};

// =========================
// OBTENER TODOS
// =========================
const obtenerProyectos = async (filtros) => {

  const where = {};

  // FILTRO ESTADO
  if (filtros.estado) {

    where.estado = filtros.estado;

  }

  // FILTRO NOMBRE
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

// =========================
// OBTENER POR ID
// =========================
const obtenerProyectoPorId = async (id) => {

  return await prisma.proyecto.findUnique({

    where: {

      id: Number(id),

    },

  });

};

// =========================
// ACTUALIZAR
// =========================
const actualizarProyecto = async (id, data) => {

  return await prisma.proyecto.update({

    where: {

      id: Number(id),

    },

    data: {

      nombre: data.nombre,

      descripcion: data.descripcion,

      fechaInicio: new Date(data.fechaInicio),

      fechaFin: new Date(data.fechaFin),

      estado: data.estado,

    },

  });

};

// =========================
// ELIMINAR
// =========================
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