const proyectoService = require("../services/proyectoService");

const crear = async (req, res) => {
  try {

    const proyecto =
      await proyectoService.crearProyecto(req.body);

    res.status(201).json(proyecto);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });
  }
};

const obtenerTodos = async (req, res) => {

  try {

    const filtros = req.query;

    const proyectos =
      await proyectoService.obtenerProyectos(
        filtros
      );

    res.json(proyectos);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }
};

const obtenerPorId = async (req, res) => {
  try {

    const proyecto =
      await proyectoService.obtenerProyectoPorId(
        req.params.id
      );

    res.json(proyecto);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });
  }
};

const actualizar = async (req, res) => {
  try {

    const proyecto =
      await proyectoService.actualizarProyecto(
        req.params.id,
        req.body
      );

    res.json(proyecto);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });
  }
};

const eliminar = async (req, res) => {
  try {

    await proyectoService.eliminarProyecto(
      req.params.id
    );

    res.json({
      message: "Proyecto eliminado",
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