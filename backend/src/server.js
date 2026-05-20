require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const beneficiarioRoutes = require("./routes/beneficiarioRoutes");
const proyectoRoutes = require("./routes/proyectoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(
  "/api/beneficiarios",
  beneficiarioRoutes
);

app.use(
  "/api/proyectos",
  proyectoRoutes
);

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando correctamente",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Servidor corriendo en puerto ${PORT}`
  );
});