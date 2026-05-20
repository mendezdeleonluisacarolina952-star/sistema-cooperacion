const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

const {
  verifyToken,
  verifyRole,
} = require("../middleware/authMiddleware");

const {
  registerValidation,
} = require("../validators/authValidator");

const validateFields = require(
  "../middleware/validationMiddleware"
);

router.post(
  "/register",
  registerValidation,
  validateFields,
  authController.register
);

router.post("/login", authController.login);

router.get(
  "/profile",
  verifyToken,
  authController.profile
);

router.get(
  "/admin",
  verifyToken,
  verifyRole(["admin"]),
  (req, res) => {
    res.json({
      message: "Bienvenido admin",
    });
  }
);

module.exports = router;

