const beneficiarioService = require("../services/beneficiarioService");

const crear = async (req, res) => {
  try {

    const beneficiario =
      await beneficiarioService.crearBeneficiario(req.body);

    res.status(201).json(beneficiario);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });
  }
};

const obtenerTodos = async (req, res) => {
  try {

    const beneficiarios =
      await beneficiarioService.obtenerBeneficiarios();

    res.json(beneficiarios);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });
  }
};

const obtenerPorId = async (req, res) => {
  try {

    const beneficiario =
      await beneficiarioService.obtenerBeneficiarioPorId(
        req.params.id
      );

    res.json(beneficiario);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });
  }
};

const actualizar = async (req, res) => {
  try {

    const beneficiario =
      await beneficiarioService.actualizarBeneficiario(
        req.params.id,
        req.body
      );

    res.json(beneficiario);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });
  }
};

const eliminar = async (req, res) => {
  try {

    await beneficiarioService.eliminarBeneficiario(
      req.params.id
    );

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