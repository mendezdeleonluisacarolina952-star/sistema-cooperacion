const express = require("express");

const router = express.Router();

const {
  obtenerDashboard,
} = require(
  "../controllers/dashboardController"
);

const {
  verifyToken,
} = require(
  "../middleware/authMiddleware"
);

router.get(
  "/",
  verifyToken,
  obtenerDashboard
);

module.exports = router;