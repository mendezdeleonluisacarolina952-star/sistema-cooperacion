require("dotenv").config();


const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");


const app = express();
const beneficiarioRoutes = require("./routes/beneficiarioRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/beneficiarios", beneficiarioRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API funcionando correctamente",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
app.use("/api/beneficiarios", beneficiarioRoutes);