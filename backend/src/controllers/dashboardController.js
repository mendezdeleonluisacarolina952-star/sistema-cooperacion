const dashboardService = require(
  "../services/dashboardService"
);

const obtenerDashboard = async (
  req,
  res
) => {
  try {

    const data =
      await dashboardService.obtenerDashboard();

    res.json(data);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  obtenerDashboard,
};