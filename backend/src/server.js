require("dotenv").config();

const express = require("express");
const cors = require("cors");

/* ROUTES */
const authRoutes = require("./routes/authRoutes");

const beneficiarioRoutes = require(
  "./routes/beneficiarioRoutes"
);

const proyectoRoutes = require(
  "./routes/proyectoRoutes"
);

const dashboardRoutes = require(
  "./routes/dashboardRoutes"
);

const usuarioRoutes = require(
  "./routes/usuarioRoutes"
);

const reporteRoutes = require(
  "./routes/reporteRoutes"
);

const app = express();

/* MIDDLEWARES */
app.use(cors());

app.use(express.json());

/* API ROUTES */

// AUTH
app.use(
  "/api/auth",
  authRoutes
);

// BENEFICIARIOS
app.use(
  "/api/beneficiarios",
  beneficiarioRoutes
);

// PROYECTOS
app.use(
  "/api/proyectos",
  proyectoRoutes
);

// DASHBOARD
app.use(
  "/api/dashboard",
  dashboardRoutes
);

// USUARIOS
app.use(
  "/api/usuarios",
  usuarioRoutes
);

// REPORTES
app.use(
  "/api/reportes",
  reporteRoutes
);

/* TEST ROUTE */
app.get("/", (req, res) => {

  res.json({
    message:
      "API funcionando correctamente",
  });

});

/* SERVER */
const PORT =
  process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `Servidor corriendo en puerto ${PORT}`
  );

});